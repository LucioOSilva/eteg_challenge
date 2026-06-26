interface TextareaFieldProps {
  label: string;
  tooltip?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  hint?: string;
  placeholder?: string;
  rows?: number;
}