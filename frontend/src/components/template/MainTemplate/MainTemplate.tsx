import { type FC } from "react";
import { ThemeSwitcher } from "@/components/atoms";

export const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <ThemeSwitcher />
      <div className="max-w-[1280px] mx-auto bg-input h-screen">
        {children}
      </div>
    </div>
  );
};

