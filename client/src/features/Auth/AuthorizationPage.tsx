/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
import { useAppDispatch } from '../../redux/store';
import { login } from './types/authSlice';
import type { Authorization } from './types/type';

function AuthorizationPage(): JSX.Element {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: Authorization): void => {
    try {
      dispatch(login(data)).catch((err) => console.error(err));
      reset();
      navigate('/login');
    } catch (error) {
      setError('email', { type: 'manual', message: 'ошибка' });
    }
  };
  return (
    <div className="container mx-auto w-1/5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="py-2"
          type="email"
          placeholder="Введите вашу эл. почту"
          {...register('email', { required: 'Введите вашу почту!' })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          className="py-2"
          type="password"
          placeholder="Введите ваш пароль"
          {...register('password', { required: 'Введите ваш пароль!' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button className="py-2" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
