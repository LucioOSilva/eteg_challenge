type SelectOption = {
  label: string;
  value: string;
}

interface SelectProps {
  id?: string;
  options: SelectOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  capitalize?: boolean;
};