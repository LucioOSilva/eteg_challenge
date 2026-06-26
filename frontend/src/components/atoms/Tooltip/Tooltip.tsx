import { type FC } from "react";
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Tooltip: FC<TooltipProps> = ({ childrenTrigger, childrenContent }) => {
  return (
    <TooltipUI>
      <TooltipTrigger className="flex">{childrenTrigger}</TooltipTrigger>
      <TooltipContent>
        {childrenContent}
      </TooltipContent>
    </TooltipUI>
  );
};
