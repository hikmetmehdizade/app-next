import cn from 'classnames';
import { InputHTMLAttributes, Ref, forwardRef, useId } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
}

const Input = forwardRef(
  ({ label, fullWidth, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <label htmlFor={id} className="flex w-fit flex-col">
        {label && <span className="text-base font-medium">{label}</span>}
        <input
          id={id}
          ref={ref}
          className={cn(
            'rounded-lg border border-gray-300 bg-white  px-4 py-3 text-base font-medium outline-0 focus:border-primary disabled:bg-gray-200',
            { 'w-full': fullWidth }
          )}
          {...props}
        />
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;
