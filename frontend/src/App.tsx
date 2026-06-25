import { type FC } from 'react';
import { ThemeProvider } from '@/components/context';
import { MainPage } from './components/pages';
import './style/index.css';

export const App: FC = () => {
  
  return (
    <ThemeProvider defaultTheme="posthog">
      <MainPage />
    </ThemeProvider>
  )
}
