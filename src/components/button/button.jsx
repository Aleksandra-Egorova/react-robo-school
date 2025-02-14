import styles from './button.module.scss';

export const Button = ({ variant = 'primary', additionalClassname, children, ...rest }) => {
  const createButtonVariant = () => {
    switch (variant) {
      case 'primary':
        return `${styles.button} ${styles.primary}`;
      case 'secondary':
        return `${styles.button} ${styles.secondary}`;
      case 'text':
        return `${styles.text}`;
      default:
        return styles.button;
    }
  };

  const createButtonClassname = () => {
    const baseClass = createButtonVariant();
    return additionalClassname ? `${baseClass} ${additionalClassname}` : baseClass;
  };

  return (
    <button className={createButtonClassname()} {...rest}>
      {children}
    </button>
  );
};
