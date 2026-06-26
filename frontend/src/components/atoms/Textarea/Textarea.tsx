import { type FC } from 'react';
import { Textarea as TextareaUI } from '@/components/ui';
import { cn } from '@/lib/utils';

export const Textarea: FC<TextareaFieldProps> = ({
  name,
  value,
  onChange,
  error,
  placeholder,
  rows = 4,
  className
}) => (
  <TextareaUI
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className={cn(
      'w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground resize-none',
      'placeholder:text-muted-foreground/50',
      'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary',
      'transition-colors duration-200',
      error ? 'border-destructive' : 'border-border',
      className
    )}
  />
);