import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/atoms';
import { ThemeSwitcher } from "@/components/molecules";


const header_mock = {
  title: "Cadastro de cliente",
  description: "Preencha os dados para registrar um novo cliente"
}

const user_mock = {
  name: "John Doe",
  role: "Admin",
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <Card>
      <section className="flex justify-between">
        <div className={cn("flex flex-col gap-1", className)}>
          <h1 className="font-bold text-xl">{header_mock.title}</h1>
          <p>{header_mock.description}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className='flex flex-col items-end'>
            <p className="font-semibold">{user_mock.name}</p>
            <p className="text-primary-foreground bg-primary px-2 py-1 rounded-full text-center border border-muted">{user_mock.role}</p>
          </div>
        <ThemeSwitcher className="cursor-pointer hover:text-muted-foreground"/>
        </div>

      </section>
    </Card>
    
  )
};