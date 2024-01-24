/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import type { Registration } from './types/type';
import { signin } from './types/authSlice';

function RegistrationPage(): JSX.Element {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      checkPassword: '',
    },
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dbError = useSelector((store: RootState) => store.auth.error);
  // console.log(dbError);

  function validateEmail(email: string): boolean {
    return Boolean(
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
    );
  }

  const onSubmit = async (data: Registration & { checkPassword: string }): Promise<void> => {
    try {
      if (validateEmail(data.email)) {
        // if (!dbError) {
          dispatch(signin(data)).catch((err) => console.error(err));
          reset();
          navigate('/login');
        // } else {
        //   setError('root', { type: 'manual', message: dbError });
        // }
      } else {
        setError('email', { type: 'manual', message: 'Введите эл. почту типа example@mail.ru' });
      }
    } catch (error) {
      setError('email', { type: 'manual', message: 'Возникла серверная ошибка' });
    }
  };

  return (
    <div className="container mx-auto w-1/5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="py-2"
          type="name"
          placeholder="Введите ваше имя"
          {...register('name', { required: 'Введите ваше имя!' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Input
          className="py-2"
          type="email"
          placeholder="Введите вашу эл. почту"
          {...register('email', {
            required: 'Введите электронную почту!',
            validate: () => (errors.email && errors.email.type === 'manual') || true,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          className="py-2"
          type="phone"
          placeholder="Введите ваш номер телефона"
          {...register('phone', { required: 'Введите номер телефона!' })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        <Input
          className="py-2"
          type="password"
          placeholder="Введите ваш пароль"
          {...register('password', {
            required: 'Введите пароль!',
            minLength: { value: 6, message: 'Пароль должен содержать не менее 6 символов!' },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Input
          className="py-2"
          type="password"
          placeholder="Повторите ваш пароль"
          {...register('checkPassword', { required: 'Введите ваш пароль еще раз!' })}
        />
        {errors.checkPassword && <p>{errors.checkPassword.message}</p>}
        {errors.root && <p>{errors.root.message}</p>}

        <Button className="py-2" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

export default RegistrationPage;
