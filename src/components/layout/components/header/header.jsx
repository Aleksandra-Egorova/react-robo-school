import { Container } from '@/components/container/index';

import { Logo } from '../logo';
import { Navbar } from './components/navbar';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          <Logo />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
