import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal-window';

import { TeacherModalContent } from '../modal-content';

import styles from './teacher-item.module.scss';

export const TeacherItem = ({ teacher }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, name, imageName, desc } = teacher;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div key={id} className={styles.teacherItem}>
      <img className={styles.img} src={teachersImages[imageName]} alt={name} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <p className={styles.post}>{desc}</p>

        <Button variant="text" additionalClassname={styles.btn} onClick={handleModalOpen}>
          Подробнее
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <TeacherModalContent teacher={teacher} />
      </Modal>
    </div>
  );
};
