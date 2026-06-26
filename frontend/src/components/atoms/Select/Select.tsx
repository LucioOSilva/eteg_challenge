import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { type FC } from "react";
import { cn } from "@/lib/utils";

export const Select: FC<SelectProps> = ({
  id,
  options,
  value,
  onValueChange,
  placeholder = "Selecione uma opção",
  disabled = false,
  className,
  required,
  capitalize = true,
  side,
  sideOffset,
  position
}) => {
  return (
    <SelectUI
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
    >
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent id={id} side={side} sideOffset={sideOffset} position={position}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className={capitalize ? 'capitalize' : ''}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
};
