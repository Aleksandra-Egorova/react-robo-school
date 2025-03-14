import { useRef, useState } from 'react';

import { ArrowDownIcon } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  useOutsideClick({
    ref: selectRef,
    handler: handleSelectClose,
    condition: isSelectOpen,
    exceptElementRef: buttonRef,
  });

  const createSelectHandler = (option) => () => {
    onChange(option);
    handleSelectClose();
  };

  const handleSelectToggle = () => {
    setIsSelectOpen((isSelectOpen) => !isSelectOpen);
  };

  const arrowIconClassname = `${styles.dropdownArrow} ${isSelectOpen ? styles.open : ''}`;

  const createOptionClassname = (optionValue) => {
    return `${styles.option} ${optionValue === value.value ? styles.activeOption : ''}`;
  };

  return (
    <div className={styles.select} ref={selectRef}>
      <button className={styles.button} ref={buttonRef} onClick={handleSelectToggle}>
        {value.label}

        <ArrowDownIcon className={arrowIconClassname} />
      </button>

      {isSelectOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option.value}
              className={createOptionClassname(option.value)}
              onClick={createSelectHandler(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
