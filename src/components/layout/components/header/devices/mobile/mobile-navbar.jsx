import { useState } from 'react';

import { BurgerIcon, CloseIcon } from '@/assets/icons';
import { Link } from '@/components/link';

import styles from './mobile-navbar.module.scss';

const navbarItems = [
  {
    id: 1,
    title: 'О школе',
    href: '#status',
  },
  {
    id: 2,
    title: 'Тренеры',
    href: '#teachers',
  },
  {
    id: 3,
    title: 'Стоимость',
    href: '#packages',
  },
];

export const MobileNavbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const handleMobileNavbarOpen = () => {
    setIsMobileNavbarOpen(true);
  };

  const handleMobileNavbarClose = () => {
    setIsMobileNavbarOpen(false);
  };

  return (
    <>
      <button onClick={handleMobileNavbarOpen} className={styles.mobileBurger}>
        <BurgerIcon />
      </button>

      {isMobileNavbarOpen && (
        <div className={styles.mobileMenu}>
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
          <button onClick={handleMobileNavbarClose} className={styles.mobileClose}>
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};
