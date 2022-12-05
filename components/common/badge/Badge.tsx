import cn from 'classnames';
import { ReactNode } from 'react';

type ColorType =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'gray'
  | 'light'
  | 'warning'
  | 'danger'
  | 'success'
  | 'info';

interface BadgeProps {
  children: ReactNode;
  color?: ColorType;
  className?: string;
  rounded?: boolean;
  outline?: boolean;
}




const BADGE_COLORS = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    dark: 'bg-black text-white',
    gray: 'bg-gray-600 text-white',
    light: 'bg-gray-100 text-black',
    warning: 'bg-amber-400 text-black',
    danger: 'bg-red-600 text-white',
    success: 'bg-green-600 text-white',
    info: 'bg-cyan-600 text-white'
} as Record<ColorType, string>;

const Badge = ({
  children,
  className,
  rounded = false,
  color = 'primary',
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-block text-sm px-3 py-1',
        BADGE_COLORS[color],
        {
          rounded: !rounded,
          'rounded-full': rounded,
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
