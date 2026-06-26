import { type FC, useCallback } from "react";
import { } from '@/hooks';
import { Header } from "@/components/organisms";
import { useFormCustomer } from "@/hooks";
import { Users, PlusCircle } from 'lucide-react';
import { Dialog } from '@/components/atoms';
import { FormCustomer } from '@/components/organisms';
import { Button } from '@/components/atoms';

const header_mock = {
  title: "Cadastro de cliente",
  description: "Preencha os dados para registrar um novo cliente",
};

const user_mock = {
  name: "John Doe",
  role: "Admin",
};

export const CustomerTemplate: FC = () => {
  const {customersList, createCustomer} = useFormCustomer();

  const HeaderChildren = useCallback(() => {
    return (
      <div className="flex items-center gap-3">
        <Dialog
          childrenTrigger={
            <Button size="sm" className="flex items-center gap-1.5">
              <PlusCircle className="w-4 h-4" />
              Adicionar cliente
            </Button>
          }
          ChildrenTitle="Novo cliente"
          childrenContent={<FormCustomer onCreateCustomer={createCustomer} />}
        />

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>
            <span className="font-semibold text-foreground">{customersList?.length}</span> clientes cadastrados
          </span>
        </div>
      </div>
    )
  }, [customersList, createCustomer]);

  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto shadow-near bg-sidebar-accent h-screen px-xs md:px-m pt-m flex flex-col gap-4">
        <Header
          className="p-4"
          children={HeaderChildren()}
          title={header_mock.title}
          description={header_mock.description}
          userMinimalData={user_mock}
          />
      </div>
    </div>
  );
};

