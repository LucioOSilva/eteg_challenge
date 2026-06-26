import { type FC } from 'react';
import { Textarea, Tooltip } from '@/components/atoms';

export const TextareaField: FC<TextareaFieldProps> = ({
  label,
  tooltip,
  name,
  value,
  onChange,
  error,
  hint,
  placeholder,
  rows = 4,
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-1.5">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </label>
      {tooltip && (
        <Tooltip
          childrenTrigger={
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-muted-foreground/40 text-muted-foreground/60 text-[10px] font-bold cursor-help leading-none">
              ?
            </span>
          }
          childrenContent={
            <p className="text-xs max-w-56 leading-relaxed">{tooltip}</p>
          }
        />
      )}
    </div>

    <Textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />

    {hint && !error && (
      <span className="text-xs text-muted-foreground">{hint}</span>
    )}
    {error && (
      <span className="text-xs text-destructive">{error}</span>
    )}
  </div>
);