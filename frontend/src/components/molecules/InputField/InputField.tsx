import { type FC } from 'react';
import { Input as InputUI } from '@/components/ui';
import { Tooltip } from '@/components/atoms';

interface InputFieldProps {
  label: string;
  tooltip?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  placeholder?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: string;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  tooltip,
  name,
  value,
  onChange,
  error,
  hint,
  placeholder,
  type = 'text',
  inputMode,
  autoComplete,
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
    <InputUI
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      inputMode={inputMode}
      autoComplete={autoComplete}
      className={[
        'w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground',
        'placeholder:text-muted-foreground/50',
        'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary',
        'transition-colors duration-200',
        error ? 'border-destructive' : 'border-border',
      ].join(' ')}
    />
    {hint && !error && (
      <span className="text-xs text-muted-foreground">{hint}</span>
    )}
    {error && <span className="text-xs text-destructive">{error}</span>}
  </div>
);
