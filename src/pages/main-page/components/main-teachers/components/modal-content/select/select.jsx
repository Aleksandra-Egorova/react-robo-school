import { useRef, useState } from 'react';

import { ArrowDownIcon } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useRef(null);
  const buttonRef = useRef(null);

  useOutsideClick({
    ref: selectRef,
    handler: () => setIsSelectOpen(false),
    condition: isSelectOpen,
    expectElementRef: buttonRef,
  });

  const createSelectHandler = (value) => () => {
    onChange(value);
    setIsSelectOpen(false);
  };

  const handleSelectOpen = () => {
    setIsSelectOpen((isSelectOpen) => !isSelectOpen);
  };

  const buttonText = options.find((option) => option.value === value)?.label;

  return (
    <div className={styles.select} ref={selectRef}>
      <button className={styles.button} ref={buttonRef} onClick={handleSelectOpen}>
        {buttonText}
        <ArrowDownIcon className={`${styles.dropdownArrow} ${isSelectOpen ? styles.open : ''}`} />
      </button>

      {isSelectOpen && (
        <div className={styles.dropdown}>
          {options.map(({ value: optionValue, label }) => (
            <button
              key={optionValue}
              className={`${styles.option} ${optionValue === value ? styles.activeOption : ''}`}
              onClick={createSelectHandler(optionValue)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
