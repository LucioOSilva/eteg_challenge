import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Card, Dialog } from '@/components/atoms';
import { ThemeSwitcher } from "@/components/molecules";
import { FormCustomer } from '@/components/organisms';
import { UserCircle2, Users, PlusCircle, Palette } from 'lucide-react';
import { Button } from '@/components/atoms';

const header_mock = {
  title: "Cadastro de cliente",
  description: "Preencha os dados para registrar um novo cliente",
};

const user_mock = {
  name: "John Doe",
  role: "Admin",
};

export const Header: FC<HeaderProps> = ({ className, totalCustomers, onCreateCustomer }) => {
  return (
    <Card>
      <section className={cn("flex justify-between items-start gap-4", className)}>

        {/* Esquerda: título + ações */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h1 className="font-bold text-xl">{header_mock.title}</h1>
            <p className="text-sm text-muted-foreground">{header_mock.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <Dialog
              childrenTrigger={
                <Button size="sm" className="flex items-center gap-1.5">
                  <PlusCircle className="w-4 h-4" />
                  Adicionar cliente
                </Button>
              }
              ChildrenTitle="Novo cliente"
              childrenContent={<FormCustomer onCreateCustomer={onCreateCustomer} />}
            />

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>
                <span className="font-semibold text-foreground">{totalCustomers}</span> clientes cadastrados
              </span>
            </div>
          </div>
        </div>

        {/* Direita: usuário + tema */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-2">
            <UserCircle2 className="w-5 h-5 text-muted-foreground" />
            <div className="flex flex-col items-end">
              <p className="font-semibold text-sm leading-tight">{user_mock.name}</p>
              <span className="text-primary-foreground bg-primary px-2 py-0.5 rounded-full text-[10px] font-medium border border-muted">
                {user_mock.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Palette className="w-4 h-4" />
            <span>Tema</span>
            <ThemeSwitcher className="cursor-pointer hover:text-muted-foreground" />
          </div>
        </div>

      </section>
    </Card>
  );
};