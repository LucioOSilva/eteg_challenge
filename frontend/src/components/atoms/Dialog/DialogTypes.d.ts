type DialogProps = {
  childrenTrigger?: React.ReactNode;
  ChildrenTitle?: React.ReactNode;
  childrenContent?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};