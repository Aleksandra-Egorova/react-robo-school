import { useEffect } from 'react';

export const useOutsideClick = ({ ref, handler, condition, exceptElementRef }) => {
  useEffect(() => {
    if (condition) {
      const handleClickOutside = (event) => {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          (!exceptElementRef || !exceptElementRef.current.contains(event.target))
        ) {
          handler();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, handler, condition, exceptElementRef]);
};
