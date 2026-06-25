import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { type FC } from "react";

export const Select: FC<SelectProps> = ({
  id,
  options,
  value,
  onValueChange,
  placeholder = "Selecione uma opção",
  disabled = false,
  className,
  required,
  capitalize = true
}) => {
  return (
    <SelectUI
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent id={id}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className={capitalize ? 'capitalize' : ''}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
};
