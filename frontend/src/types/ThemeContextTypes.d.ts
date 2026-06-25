type ThemeName = 'default' | 'notion' | 'posthog' | 'spotify' | 'stripe' | 'superhuman';

type ThemeContextValue = {
  THEMES: ThemeName[];
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeName;
};