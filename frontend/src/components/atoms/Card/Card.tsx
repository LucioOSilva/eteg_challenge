import { type FC } from 'react';
import {
  Card as CardUI,
  CardContent,
} from '@/components/ui';


export const Card: FC<CardProps> = ({ children }) => {
  return (
    <CardUI>
      <CardContent>
        {children}
      </CardContent>
    </CardUI>
  )
};

