import { Container } from '@/components/container/index';
import { Navbar } from '@/components/header/components/navbar';
import { Logo } from '@/components/logo';
import { PhoneCallButton } from '@/components/phone-call-button';

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
