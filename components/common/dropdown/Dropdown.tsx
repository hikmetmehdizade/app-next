import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';

interface DropdownValue {
  label: ReactNode;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

interface DropdownProps {
  label: string;
  items: DropdownValue[];
  disabled?: boolean;
  fullWidth?: boolean;
}

const Dropdown = ({
  label,
  items,
  disabled,
  fullWidth = false,
}: DropdownProps) => {
  const [] = useState();

  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {label}
            {open ? (
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            ) : (
              <ChevronUpIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            )}
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
            <Menu.Items>
              {items.map((item) => (
                <Menu.Item key={item.value} disabled={item.disabled}>
                  {({ active }) => (
                    <button disabled={item.disabled}>{item.label}</button>
                  )}
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
