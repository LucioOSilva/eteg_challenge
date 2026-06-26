import { type FC } from 'react';
import {
  Card as CardUI,
  CardContent,
} from '@/components/ui';


export const Card: FC<CardProps> = ({ children, className, classNameContent }) => {
  return (
    <CardUI className={className}>
      <CardContent className={classNameContent}>
        {children}
      </CardContent>
    </CardUI>
  )
};

