import { useEffect } from 'react';

export const useOutsideClick = ({ ref, handler, condition, expectElementRef }) => {
  useEffect(() => {
    if (condition) {
      const handleClickOutside = (event) => {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          (!expectElementRef || !expectElementRef.current.contains(event.target))
        ) {
          handler();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, handler, condition, expectElementRef]);
};
