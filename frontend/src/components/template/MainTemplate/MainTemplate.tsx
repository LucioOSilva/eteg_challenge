import { type FC } from "react";

import { Header } from "@/components/organisms";

export const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto shadow-near bg-sidebar-accent h-screen px-xs md:px-m pt-m">
        <Header className="p-4 "/>
        
        {children}
      </div>
    </div>
  );
};

