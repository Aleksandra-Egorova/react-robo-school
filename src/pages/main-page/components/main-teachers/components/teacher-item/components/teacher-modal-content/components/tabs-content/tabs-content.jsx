import styles from './tabs-content.module.scss';

export const TabsContent = ({ title, text }) => {
  return (
    <div className={styles.tabsContentInfo}>
      {Boolean(title) && <h3 className={styles.tabsContenTitle}>{title}</h3>}
      {text.map((textItem, textIndex) => (
        <p key={textIndex} className={styles.tabsContenText}>
          {textItem}
        </p>
      ))}
    </div>
  );
};
