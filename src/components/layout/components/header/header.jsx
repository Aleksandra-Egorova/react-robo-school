import { Container } from '@/components/container/index';
import { Navbar } from '@/components/layout/components/header/components/navbar';
import { Logo } from '@/components/layout/components/logo';
import { PhoneCallButton } from '@/components/layout/components/phone-call-button';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          <Logo />
          <Navbar />
          <PhoneCallButton />
        </div>
      </Container>
    </header>
  );
};
