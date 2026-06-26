import { type FC } from 'react';
import { useTheme } from '@/hooks';
import { THEMES } from '@/context';
import { Select } from '@/components/atoms';

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  const options = THEMES.map(t => ({ label: t, value: t }));

  const handleChange = (value: string) => {
    setTheme(value as ThemeName);
  };

  return (
    <Select value={theme} onValueChange={handleChange} options={options} className={className} position="popper"/>
  );
};