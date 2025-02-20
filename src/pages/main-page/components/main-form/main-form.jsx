import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Input } from '@/components/input';

import { feedbackSchema } from './helpers/schema';

import styles from './main-form.module.scss';

export const MainForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(feedbackSchema) });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    alert('Спасибо! Мы свяжемся с вами');
    reset();
  };

  return (
    <section className={styles.course}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Запишитесь на курс со скидкой 10%</h2>
            <p className={styles.description}>Акция действительна до 10 марта 2022 года</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              placeholder="Имя"
              name="name"
              register={register('name')}
              error={errors.name?.message}
            />

            <Input
              id="phone"
              placeholder="Телефон"
              type="tel"
              register={register('phone')}
              error={errors.phone?.message}
            />

            <Input
              id="email"
              placeholder="E-mail"
              type="email"
              register={register('email')}
              error={errors.email?.message}
            />

            <Button variant="secondary" additionalClassname={styles.button}>
              Оформить заявку
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
