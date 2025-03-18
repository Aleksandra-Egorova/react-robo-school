import { Container } from '@/components/container/index';
import { useWindowSize } from '@/hooks/useWindowSize';

import { Logo } from '../logo';
import { PhoneCallButton } from '../phone-call-button';
import { DesktopNavbar } from './devices/desktop';
import { MobileNavbar } from './devices/mobile';

import styles from './header.module.scss';

export const Header = () => {
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          <Logo />

          {width <= 1024 ? (
            <div className={styles.mobileContent}>
              <MobileNavbar />
              <PhoneCallButton />
            </div>
          ) : (
            <>
              <DesktopNavbar />
              <PhoneCallButton />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
