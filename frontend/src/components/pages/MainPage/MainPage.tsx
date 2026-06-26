import { type FC } from "react";
import { FormCustomer } from '@/components/organisms';
import { MainTemplate } from "@/components/template";

export const MainPage: FC = () => {
  return (
    <MainTemplate>
      <FormCustomer />
    </MainTemplate>
  );
};
