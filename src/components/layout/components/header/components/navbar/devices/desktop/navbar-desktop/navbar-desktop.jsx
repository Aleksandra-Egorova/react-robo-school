import { Link } from '@/components/link';

import { PhoneCallButton } from '../../../../../../phone-call-button';

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
