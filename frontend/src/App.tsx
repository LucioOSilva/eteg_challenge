import { type FC } from 'react';
import { ThemeProvider, ToasterProvider } from '@/context';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from '@/components/molecules';
import { CustomerPage } from './components/pages';
import './style/index.css';

export const App: FC = () => {
  
  return (
    <ThemeProvider>
      <ToasterProvider>
      <TooltipProvider>
        <CustomerPage />
      </TooltipProvider>
      <Toaster position="top-right" maxToasts={5} />
      </ToasterProvider>
    </ThemeProvider>
  )
}
