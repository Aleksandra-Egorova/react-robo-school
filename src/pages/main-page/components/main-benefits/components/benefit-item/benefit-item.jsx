import { Tooltip } from '@/components/tooltip';

import styles from './benefit-item.module.scss';

export const BenefitItem = ({ benefitItemData: { id, subtitle, description, tooltip } }) => {
  return (
    <div key={id} className={styles.benefitItem}>
      <h3 className={styles.subtitle}>
        {subtitle}
        {!!tooltip && <Tooltip text={tooltip} />}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};