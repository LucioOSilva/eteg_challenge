import { type FC, useState, useRef } from 'react';
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

const isCustomColor = (hex: string) =>
  !RAINBOW_COLORS.some((c) => c.hex === hex);

export const ColorPicker: FC<ColorPickerProps> = ({ value, onChange, error, hint, label }) => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const [customColor, setCustomColor] = useState(
    value && isCustomColor(value) ? value : '#000000'
  );

  const isCustomSelected = !!value && isCustomColor(value);

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {label}
        </label>
        <Tooltip
          childrenTrigger={
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-muted-foreground/40 text-muted-foreground/60 text-[10px] font-bold cursor-help leading-none">
              ?
            </span>
          }
          childrenContent={
            <p className="text-xs leading-relaxed">{hint}</p>
          }
        />
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {RAINBOW_COLORS.map((color) => (
          <ColorSwatch
            key={color.value}
            color={color}
            selected={value === color.hex}
            onClick={onChange}
          />
        ))}

        <Tooltip
          childrenTrigger={
            <div className="relative">
              <ColorSwatch
                color={{
                  label: 'Personalizada',
                  value: 'custom',
                  hex: isCustomSelected ? customColor : '#e2e8f0',
                }}
                selected={isCustomSelected}
                onClick={() => colorInputRef.current?.click()}
              />
              <input
                ref={colorInputRef}
                type="color"
                value={customColor}
                onChange={handleCustomChange}
                className="absolute opacity-0 pointer-events-none w-0 h-0"
              />
            </div>
          }
          childrenContent={
            <p className="text-xs leading-relaxed">Escolher cor personalizada</p>
          }
        />
      </div>

      {error && (
        <span className="text-xs text-destructive">{error}</span>
      )}
    </div>
  );
};