export const useScrollLock = () => {
  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  return { lockScroll, unlockScroll };
};
