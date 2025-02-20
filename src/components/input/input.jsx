import styles from './input.module.scss';

export const Input = ({ id, type = 'text', placeholder, register, error, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={`${styles.input} ${error ? styles.error : ''}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      {Boolean(error) && <span className={styles.message}>{error}</span>}
    </div>
  );
};
