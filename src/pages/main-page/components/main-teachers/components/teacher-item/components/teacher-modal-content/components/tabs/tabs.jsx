import styles from './tabs.module.scss';

export const Tabs = ({ options, value, onClick }) => {
  const createActiveTabClassname = (tabValue) => {
    return `${styles.navTabsBtn} ${value === tabValue ? styles.activeTab : ''}`;
  };

  const createActiveTabChangeHandler = (optionValue) => () => {
    onClick(optionValue);
  };

  return (
    <div className={styles.navTabs}>
      {options.map(({ value: optionValue, label }) => (
        <button
          key={optionValue}
          className={createActiveTabClassname(optionValue)}
          onClick={createActiveTabChangeHandler(optionValue)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
