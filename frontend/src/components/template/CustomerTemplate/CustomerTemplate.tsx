import { type FC, useCallback } from "react";
import { } from '@/hooks';
import { useFormCustomer } from "@/hooks";
import { Users, PlusCircle } from 'lucide-react';
import { Button, Dialog } from '@/components/atoms';
import { CustomerList } from '@/components/molecules';
import { FormCustomer, Header } from '@/components/organisms';

const header_mock = {
  title: "Cadastro de cliente",
  description: "Preencha os dados para registrar um novo cliente",
};

const user_mock = {
  name: "John Doe",
  role: "Admin",
};

export const CustomerTemplate: FC = () => {
  const {isFormOpen, setIsFormOpen, customersList, createCustomer, updateCustomerColor } = useFormCustomer();

  const HeaderChildren = useCallback(() => {
    return (
      <div className="flex items-center gap-3">
        <Dialog
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
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

        <div className="flex-1 overflow-y-auto pb-4">
          <CustomerList customers={customersList} onEditColor={updateCustomerColor} />
        </div>
      </div>
    </div>
  );
};

