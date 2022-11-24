import { useEffect, useRef } from 'react';

const usePortal = (id: string): Element | undefined => {
  const ref = useRef<Element>();

  useEffect(() => {
    let element = document.querySelector(`#${id}`);

    if (element) {
      ref.current = element;
    } else {
      element = document.createElement('div');
      element.setAttribute('id', id);
      document.body.append(element);
      ref.current = element;
    }

    return () => {
      if (ref.current) {
        ref.current.remove();
      }
    };
  }, [id]);

  return ref.current;
};

export default usePortal;
