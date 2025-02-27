import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth <= 768,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      isMobile: window.innerWidth <= 768,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
