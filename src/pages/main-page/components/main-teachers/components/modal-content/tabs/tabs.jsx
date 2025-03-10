import styles from './tabs.module.scss';

export const Tabs = ({ tabs, activeTab, onChange }) => {
  const createActiveTabClassname = (index) => {
    return `${styles.navTabsBtn} ${activeTab === index ? styles.activeTab : ''}`;
  };

  return (
    <div className={styles.navTabs}>
      {tabs.map((tab, index) => (
        <button key={index} className={createActiveTabClassname(index)} onClick={onChange(index)}>
          {tab.title}
        </button>
      ))}
    </div>
  );
};
