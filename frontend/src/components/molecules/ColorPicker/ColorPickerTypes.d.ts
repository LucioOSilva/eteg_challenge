interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label: string;
  hint?: string;
}