
import { ReactNode } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Intent = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Variant = 'default' | 'outline' | 'ghost' | 'link' | 'destructive';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  "data-testid"?: string;
}
