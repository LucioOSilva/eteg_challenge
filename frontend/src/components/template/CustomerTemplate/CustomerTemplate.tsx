import { type FC } from "react";
import { } from '@/hooks';
import { Header } from "@/components/organisms";
import { useFormCustomer } from "@/hooks";

export const CustomerTemplate: FC = () => {
  const {customersList, createCustomer} = useFormCustomer();
  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto shadow-near bg-sidebar-accent h-screen px-xs md:px-m pt-m flex flex-col gap-4">
        <Header className="p-4" onCreateCustomer={createCustomer} totalCustomers={customersList?.length}/>
      </div>
    </div>
  );
};

