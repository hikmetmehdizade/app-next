import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Ref, forwardRef, useState } from 'react';

import Input, { InputProps } from './Input';

interface PasswordProps extends InputProps {}

const PasswordInput = forwardRef(
  ({ ...props }: PasswordProps, ref: Ref<HTMLInputElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVis = () => {
      setIsVisible((prev) => !prev);
    };

    return (
      <div className="relative w-fit">
        <Input type={isVisible ? 'text' : 'password'} {...props} ref={ref} />
        <button
          className="absolute bg-transparent right-2 top-1/2 w-fit h-fit "
          onClick={handleVis}
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
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
