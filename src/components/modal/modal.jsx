import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { CloseIconBlack } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './modal.module.scss';

export const Modal = ({ children, isOpen, onClose }) => {
  const { isMobile } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock();

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
      return;
    }

    unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  const handleModalClose = () => {
    onClose();
  };

  useOutsideClick({
    ref: modalRef,
    handler: handleModalClose,
    condition: isOpen,
  });

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div ref={modalRef} className={styles.modalContent}>
        {children}
        <button className={styles.modalClose} onClick={handleModalClose}>
          {isMobile ? <CloseIconBlack /> : 'Закрыть'}
        </button>
      </div>
    </div>,
    document.body,
  );
};
