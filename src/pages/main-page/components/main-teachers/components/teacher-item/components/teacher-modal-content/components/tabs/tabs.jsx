import styles from './tabs.module.scss';

export const Tabs = ({ options, value, onClick }) => {
  const createActiveTabClickHandler = (option) => () => {
    onClick(option);
  };

  const createActiveTabClassname = (optionValue) => {
    return `${styles.navTabsBtn} ${value.value === optionValue ? styles.activeTab : ''}`;
  };

  return (
    <div className={styles.navTabs}>
      {options.map((option) => (
        <button
          key={option.value}
          className={createActiveTabClassname(option.value)}
          onClick={createActiveTabClickHandler(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
