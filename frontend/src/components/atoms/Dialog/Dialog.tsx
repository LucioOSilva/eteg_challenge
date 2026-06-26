import { type FC } from 'react';
import {
  Dialog as DialogUI,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Dialog: FC<DialogProps> = ({ childrenTrigger, ChildrenTitle, childrenContent }) => {
  return (
    <DialogUI>
      <DialogTrigger>{childrenTrigger}</DialogTrigger>
      <DialogContent className="gap-0 pt-8">
        <DialogTitle>{ChildrenTitle}</DialogTitle>
        <DialogHeader>
        </DialogHeader>
          {childrenContent}
      </DialogContent>
    </DialogUI>
  );
};
