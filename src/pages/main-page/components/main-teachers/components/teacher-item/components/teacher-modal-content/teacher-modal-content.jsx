import { useEffect, useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Select } from '@/components/select';
import { useWindowSize } from '@/hooks/useWindowSize';

import { SocialLinks } from './components/social-links/social-links';
import { Tabs } from './components/tabs';
import { TabsContent } from './components/tabs-content';

import styles from './teacher-modal-content.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  const [activeTab, setActiveTab] = useState(teacher.tabs[0].name);

  const [activeTabContent, setActiveTabContent] = useState(teacher.tabs[0].data);

  useEffect(() => {
    const newContent = teacher.tabs.find((tab) => tab.name === activeTab);

    if (!newContent) {
      return;
    }

    setActiveTabContent(newContent.data);
  }, [activeTab, teacher.tabs]);

  const { isMobile } = useWindowSize();

  const { name, imageName, desc, links, tabs } = teacher;

  const options = tabs.map(({ name, title }) => ({
    value: name,
    label: title,
  }));

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
          <Tabs options={options} value={activeTab} onClick={setActiveTab} />
        )}
        <div className={styles.tabsContent}>
          {activeTabContent.map((tab, index) => (
            <TabsContent key={`${tab.name}${index}`} title={tab.title} text={tab.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
