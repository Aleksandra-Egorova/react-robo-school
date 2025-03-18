import { Link } from '@/components/link';

import styles from './desktop-navbar.module.scss';

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

export const DesktopNavbar = () => {
  return (
    <nav>
      <ul className={styles.navbarDesktop}>
        {navbarItems.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
