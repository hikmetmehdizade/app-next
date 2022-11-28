import cn from 'classnames';
import { Ref, TextareaHTMLAttributes, forwardRef, useId } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
  label?: string;
}

const TextArea = forwardRef(
  (
    { fullWidth = false, label, className, ...props }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const id = useId();

    return (
      <label
        htmlFor={id}
        className={cn('flex flex-col relative', {
          'w-full': fullWidth,
          'w-fit': !fullWidth,
        })}
      >
        {label && <span className="text-base font-medium">{label}</span>}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            'rounded-lg border border-gray-300 bg-white  px-4 py-3 text-base font-medium outline-0 focus:border-primary disabled:bg-gray-200 w-full',
            className
          )}
          {...props}
        />
      </label>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
