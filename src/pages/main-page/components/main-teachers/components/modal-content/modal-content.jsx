import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { useWindowSize } from '@/hooks/useWindowSize';

import { SocialLinks } from './social-links/social-links';
import { Select } from './select';

import styles from './modal-content.module.scss';

const options = [
  { value: 0, label: 'Образование' },
  { value: 1, label: 'Опыт' },
  { value: 2, label: 'Навыки' },
];

export const TeacherModalContent = ({ teacher }) => {
  const { isMobile } = useWindowSize();

  const [activeTab, setActiveTab] = useState(0);

  const { name, imageName, desc, links, tabs } = teacher;

  const createActiveTabChangeHandler = (index) => () => {
    setActiveTab(index);
  };

  const createActiveTabClassname = (index) => {
    return `${styles.navTabsBtn} ${activeTab === index ? styles.activeTab : ''}`;
  };

  const activeTabContent = tabs[activeTab]?.data || [];

  return (
    <div className={styles.teacherModal}>
      <div className={styles.teacherBlock}>
        <img className={styles.teacherImg} src={teachersImages[imageName]} alt={name} />
        <div className={styles.teacherInfo}>
          <div className={styles.teacherName}>{name}</div>
          <p className={styles.teacherPost}>{desc}</p>
          <SocialLinks links={links} />
        </div>
      </div>

      <div className={styles.teacherTabs}>
        {isMobile ? (
          <Select options={options} value={activeTab} onChange={setActiveTab} />
        ) : (
          <div className={styles.navTabs}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={createActiveTabClassname(index)}
                onClick={createActiveTabChangeHandler(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        )}
        <div className={styles.tabsContent}>
          {activeTabContent.map((item, index) => (
            <div key={index} className={styles.tabsContentInfo}>
              {Boolean(item.title) && <h3 className={styles.tabsContenTitle}>{item.title}</h3>}
              {item.text.map((text, textIndex) => (
                <p key={textIndex} className={styles.tabsContenText}>
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
