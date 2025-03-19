import { useState } from 'react';

import { BurgerIcon, CloseIcon, PhoneIcon } from '@/assets/icons';
import { Link } from '@/components/link';
import { useScrollLock } from '@/hooks/useScrollLock';

import styles from './navbar-mobile.module.scss';

export const NavbarMobile = ({ navbarItems }) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleMobileNavbarOpen = () => {
    setIsMobileNavbarOpen(true);
    lockScroll();
  };

  const handleMobileNavbarClose = () => {
    setIsMobileNavbarOpen(false);
    unlockScroll();
  };

  return (
    <>
      <div className={styles.navbarButtons}>
        <a href="tel:88000001122" className={styles.iconButton}>
          <PhoneIcon />
        </a>

        <button onClick={handleMobileNavbarOpen} className={styles.iconButton}>
          <BurgerIcon />
        </button>
      </div>

      {isMobileNavbarOpen && (
        <div className={styles.navbarContent}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navbarItems.map((link) => (
                <li key={link.id} className={styles.mobileNavItem}>
                  <Link href={link.href} onClick={handleMobileNavbarClose}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={handleMobileNavbarClose}
            className={`${styles.iconButton} ${styles.closeBurgerBtn}`}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};
