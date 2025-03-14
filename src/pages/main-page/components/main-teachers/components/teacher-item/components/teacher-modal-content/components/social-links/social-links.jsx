import styles from './social-links.module.scss';

export const SocialLinks = ({ links }) => {
  return (
    <div className={styles.socials}>
      {links.map((link, index) => (
        <a
          key={index}
          className={styles.socialLinks}
          href={link.href.includes('http') ? link.href : `http://${link.href}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.imagePath} alt={link.href} />
        </a>
      ))}
    </div>
  );
};
