interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  userMinimalData?: {
    name: string;
    role: string;
  };
};