import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import cn from 'classnames';
import { InputHTMLAttributes, Ref, forwardRef, useId, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
  errormessage?: string;
}

const Input = forwardRef(
  (
    { label, fullWidth, type, errormessage, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    const [isVisible, setIsVisible] = useState(false);

    const handleVis = () => {
      setIsVisible((prev) => !prev);
    };

    return (
      <label
        htmlFor={id}
        className={cn('flex flex-col relative', {
          'w-full': fullWidth,
          'w-fit': !fullWidth,
          'mt-6': typeof label !== 'undefined',
          
        })}
      >
        {label && (
          <span className="text-base font-medium absolute -top-6 left-1">
            {label}
          </span>
        )}
        <input
          id={id}
          ref={ref}
          type={!isVisible ? type : 'text'}
          className={cn(
            'rounded-lg border border-gray-300 bg-white  px-4 py-3 text-base font-medium outline-0 focus:border-primary disabled:bg-gray-200 w-full',
            {
              'border-red-600 focus:border-red-600': errormessage && errormessage.length > 0,
            }
          )}
          {...props}
        />
        {type === 'password' && (
          <button
            className="absolute bg-transparent right-2 top-1/2 -translate-y-1/2 w-fit h-fit "
            onClick={handleVis}
            type="button"
          >
            {!isVisible ? (
              <EyeSlashIcon
                className="block h-6 w-6 stroke-gray-500"
                aria-hidden="true"
              />
            ) : (
              <EyeIcon
                className="block h-6 w-6 stroke-gray-500"
                aria-hidden="true"
              />
            )}
          </button>
        )}
        {errormessage && <span className='font-medium absolute -bottom-6 left-1 text-red-600'>{errormessage}</span>}
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;
