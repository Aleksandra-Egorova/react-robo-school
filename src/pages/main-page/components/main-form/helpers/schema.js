import * as yup from 'yup';

export const feedbackSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа')
    .matches(/^[а-яА-я]+$/, 'Только русские буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Введите номер телефона в формате: +7 (ХХХ) ХХХ-ХХ-ХХ',
    ),
  email: yup
    .string()
    .required('Email обязателен')
    .matches(/^\S+@\S+\.\S+$/, 'Неверный формат email'),
});
