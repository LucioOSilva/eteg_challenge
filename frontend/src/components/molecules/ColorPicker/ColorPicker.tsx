import { type FC } from 'react';
import { ColorSwatch } from '@/components/atoms';
import { Tooltip } from '@/components/atoms';

const RAINBOW_COLORS: ColorSwatchOption[] = [
  { label: 'Vermelho', value: 'vermelho', hex: '#E53935' },
  { label: 'Laranja',  value: 'laranja',  hex: '#FB8C00' },
  { label: 'Amarelo',  value: 'amarelo',  hex: '#FDD835' },
  { label: 'Verde',    value: 'verde',    hex: '#43A047' },
  { label: 'Azul',     value: 'azul',     hex: '#1E88E5' },
  { label: 'Anil',     value: 'anil',     hex: '#3949AB' },
  { label: 'Violeta',  value: 'violeta',  hex: '#8E24AA' },
];

export const ColorPickerField: FC<ColorPickerFieldProps> = ({
  value,
  onChange,
  error,
  hint
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-1.5">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Cor preferida
      </label>
      <Tooltip
        childrenTrigger={
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-muted-foreground/40 text-muted-foreground/60 text-[10px] font-bold cursor-help leading-none">
            ?
          </span>
        }
        childrenContent={
          <p className="text-xs max-w-56 leading-relaxed">
            {hint}Selecione uma das cores do arco-íris.|||||||||||
          </p>
        }
      />
    </div>

    <div className="flex flex-wrap gap-2">
      {RAINBOW_COLORS.map((color) => (
        <ColorSwatch
          key={color.value}
          color={color}
          selected={value === color.value}
          onClick={onChange}
        />
      ))}
    </div>

    {error && (
      <span className="text-xs text-destructive">{error}</span>
    )}
  </div>
);