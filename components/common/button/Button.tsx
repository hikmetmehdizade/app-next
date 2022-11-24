import cn from 'classnames';
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';

type ButtonType = 'primary' | 'secondary' | 'dark';

type ButtonRadius = 'full' | 'md' | 'none';

const BUTTON_TYPE = {
  primary: (o) =>
    !o ? 'bg-primary text-white' : 'border border-primary text-primary',
  secondary: (o) =>
    !o ? 'bg-secondary text-white' : 'border border-secondary text-secondary',
  dark: (o) => (!o ? 'bg-dark text-white' : 'border border-dark text-dark'),
} as Record<ButtonType, (outline: boolean) => string>;

const BUTTON_RADIUS = {
  full: 'rounded-full',
  none: '',
  md: 'rounded-md',
} as Record<ButtonRadius, string>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btnType?: ButtonType;
  fullWidth?: boolean;
  rounded?: ButtonRadius;
  outline?: boolean;
}

const Button = forwardRef(
  (
    {
      children,
      className,
      btnType = 'primary',
      fullWidth = false,
      rounded = 'none',
      outline = false,
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={cn(
        'w-fit py-3.5 px-10 text-base font-semibold disabled:opacity-70',
        BUTTON_TYPE[btnType](outline),
        BUTTON_RADIUS[rounded],
        className,
        {
          'w-full': fullWidth,
        }
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
