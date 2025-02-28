import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';

import styles from './teacher-item.module.scss';

export const TeacherItem = ({ teacher: { id, name, imageName, desc } }) => {
  return (
    <div key={id} className={styles.teacherItem}>
      <img className={styles.img} src={teachersImages[imageName]} alt={name} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <p className={styles.post}>{desc}</p>

        <Button variant="text" additionalClassname={styles.btn}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
