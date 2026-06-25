import { useTheme } from '@/hooks';
import { THEMES } from '@/context';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={e => setTheme(e.target.value as ThemeName)}>
      {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
    </select>
  );
};