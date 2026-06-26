import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/atoms';
import { ThemeSwitcher } from "@/components/molecules";
import { UserCircle2, Palette } from 'lucide-react';

const header_mock = {
  title: "Cadastro de cliente",
  description: "Preencha os dados para registrar um novo cliente",
};

const user_mock = {
  name: "John Doe",
  role: "Admin",
};

export const Header: FC<HeaderProps> = ({ className, children }) => {
  return (
    <Card>
      <section className={cn("flex justify-between items-start gap-4", className)}>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h1 className="font-bold text-xl">{header_mock.title}</h1>
            <p className="text-sm text-muted-foreground">{header_mock.description}</p>
          </div>

          {children}
        </div>

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