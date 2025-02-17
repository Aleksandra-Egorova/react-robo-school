import { useState } from 'react';

import { TooltipIcon } from '@/assets/icons/TooltipIcon';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className={styles.tooltip}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <span className={styles.icon}>
        <TooltipIcon />
      </span>
      {showTooltip && <span className={styles.text}>{text}</span>}
    </span>
  );
};
