import styles from './tabs.module.scss';

export const Tabs = ({ options, value, onClick }) => {
  const createActiveTabClassname = (tab) => {
    return `${styles.navTabsBtn} ${value === tab ? styles.activeTab : ''}`;
  };

  const createActiveTabChangeHandler = (option) => () => {
    onClick(option);
  };

  return (
    <div className={styles.navTabs}>
      {options.map((option) => (
        <button
          key={option.name}
          className={createActiveTabClassname(option)}
          onClick={createActiveTabChangeHandler(option)}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
};
