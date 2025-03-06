import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { CloseIconBlack } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './modal-window.module.scss';

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

  useOutsideClick({
    ref: modalRef,
    handler: () => {
      if (isOpen) {
        onClose();
      }
    },
    condition: isOpen,
  });

  if (!isOpen) return null;

  const handleModalClose = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div ref={modalRef} className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          {children}
          <button className={styles.modalClose} onClick={handleModalClose}>
            {isMobile ? <CloseIconBlack /> : 'Закрыть'}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
