import { type FC } from "react";
import { ThemeSwitcher } from "@/components/molecules";

export const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto bg-input h-screen">
      <ThemeSwitcher />
        {children}
      </div>
    </div>
  );
};

