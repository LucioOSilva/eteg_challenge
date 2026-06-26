import { type FC } from 'react';

export const ColorSwatch: FC<ColorSwatchProps> = ({ color, selected, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(color.hex)}
    aria-pressed={selected}
    aria-label={color.label}
    className={[
      'flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium',
      'transition-all duration-200 cursor-pointer',
      selected
        ? 'border-foreground bg-secondary text-foreground shadow-sm'
        : 'border-border bg-background text-muted-foreground hover:border-foreground/40 hover:bg-secondary/50',
    ].join(' ')}
  >
    <span
      className="w-3 h-3 rounded-full flex-shrink-0 ring-1 ring-black/10"
      style={{ backgroundColor: color.hex }}
    />
    {color.label}
  </button>
);