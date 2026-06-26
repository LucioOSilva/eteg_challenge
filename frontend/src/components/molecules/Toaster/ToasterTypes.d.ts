type ToastItemProps = {
  toast: Toast;
  onRemove: (id: string) => void;
}

interface ToasterProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  maxToasts?: number;
}
