interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
}