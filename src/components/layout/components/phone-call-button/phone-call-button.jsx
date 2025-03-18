import { PhoneIcon } from '@/assets/icons';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './phone-call-button.module.scss';

export const PhoneCallButton = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 1024 ? (
        <a href="tel:88000001122" className={styles.mobilePhoneCall}>
          <PhoneIcon />
        </a>
      ) : (
        <a href="tel:88000001122" className={styles.desktopPhoneCall}>
          +7 800 000 11 22
        </a>
      )}
    </>
  );
};
