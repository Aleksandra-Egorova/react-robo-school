import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { useWindowSize } from '@/hooks/useWindowSize';

import { SocialLinks } from './social-links/social-links';
import { Select } from './select';
import { Tabs } from './tabs';

import styles from './modal-content.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile } = useWindowSize();

  const { name, imageName, desc, links, tabs } = teacher;

  const options = tabs.map((tab, index) => ({
    value: index,
    label: tab.title,
  }));

  const createActiveTabChangeHandler = (index) => () => {
    setActiveTab(index);
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
          <Tabs tabs={tabs} activeTab={activeTab} onChange={createActiveTabChangeHandler} />
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
