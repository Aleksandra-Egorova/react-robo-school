import styles from './link.module.scss';

export const Link = ({ href, children, additionalClassname, onClick }) => {
  const createLinkClassname = () => {
    const baseClassname = `${styles.link}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  return (
    <a href={href} className={createLinkClassname()} onClick={onClick}>
      {children}
    </a>
  );
};
