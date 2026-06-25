import { createContext, useEffect, useState, type FC } from 'react';

export const THEMES: ThemeName[] = ['default', 'notion', 'posthog', 'spotify', 'stripe', 'superhuman'];

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, defaultTheme = 'default' }) => {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ THEMES, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

