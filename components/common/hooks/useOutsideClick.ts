import { RefObject, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<any>, cd: (e: MouseEvent) => void) => {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!ref.current && !ref.current?.contains(event.target)) {
        cd(event);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.addEventListener('mousedown', handler);
    };
  }, [ref]);
};

export default useOutsideClick;
