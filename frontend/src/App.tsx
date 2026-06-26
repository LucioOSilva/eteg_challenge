import { type FC } from 'react';
import { ThemeProvider } from '@/context';
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainPage } from './components/pages';
import './style/index.css';

export const App: FC = () => {
  
  return (
    <ThemeProvider>
      <TooltipProvider>
        <MainPage />
      </TooltipProvider>
    </ThemeProvider>
  )
}
