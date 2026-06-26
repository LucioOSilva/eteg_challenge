interface ColorSwatchOption {
  label: string;
  value: string;
  hex: string;
}
 
interface ColorSwatchProps {
  color: ColorSwatchOption;
  selected: boolean;
  onClick: (value: string) => void;
}
 