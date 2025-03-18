import { PhoneCallButton } from '@/components/layout/components/phone-call-button';
import { Link } from '@/components/link';

import styles from './navbar-desktop.module.scss';

export const NavbarDesktop = ({ navbarItems }) => {
  return (
    <>
      <nav>
        <ul className={styles.navbarDesktop}>
          {navbarItems.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <PhoneCallButton />
    </>
  );
};
