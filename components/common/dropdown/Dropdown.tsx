import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import cn from 'classnames';
import {
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface DropdownValue {
  label: ReactNode;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

interface DClassNames {
  button?: string;
  box?: string;
  layout?: string;
}

interface DropdownProps {
  label: string;
  items: DropdownValue[];
  disabled?: boolean;
  fullWidth?: boolean;
  classNames?: DClassNames;
  value?: DropdownValue['value'];
  onSelect?: (value: DropdownValue['value']) => void;
}

const Dropdown = ({
  label,
  items,
  disabled,
  fullWidth = false,
  classNames,
  value,
  onSelect,
}: DropdownProps) => {
  const onSelectValue = (v: DropdownValue) => {
    if (onSelect) {
      onSelect(v.value);
    }
  };

  useEffect(() => {}, [value]);

  const v = useMemo(
    () => items.find((item) => item.value === value),
    [items, value]
  );

  return (
    <Menu as="div" className={cn('relative inline-block', classNames?.layout)}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cn(
              'relative flex rounded-md bg-primary text-base py-3 pl-5 pr-8  text-white font-semibold',
              {
                'w-full': fullWidth,
                'disabled:opacity-30 disabled:cursor-not-allowed': disabled,
              },
              classNames?.button
            )}
            disabled={disabled}
          >
            {!v ? label : v.label}
            <span className="absolute right-2 top-1/2 -translate-y-1/2">
              {open ? (
                <ChevronDownIcon
                  className="h-5 w-5 text-white hover:text-violet-100"
                  aria-hidden="true"
                />
              ) : (
                <ChevronUpIcon
                  className="h-5 w-5 text-white hover:text-violet-100"
                  aria-hidden="true"
                />
              )}
            </span>
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={cn(
                'absolute bg-slate-50 z-10 mt-2 w-fit border rounded py-5 shadow-2xl',
                classNames?.box
              )}
            >
              {items.map((item) => (
                <Menu.Item
                  key={item.value}
                  as="button"
                  className="w-full px-5 py-2 text-base text-start font-semibold text-gray-700 hover:text-primary hover:bg-slate-200"
                  disabled={item.disabled}
                  onClick={() => onSelectValue(item)}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
