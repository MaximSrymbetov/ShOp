/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
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
  const dbError = useSelector((store: RootState) => store.auth.message);

  const onSubmit = (data: Authorization): void => {
    try {
      dispatch(login(data)).catch((err) => console.error(err));
      reset();
      navigate('/login');
    } catch (error) {
      setError('password', { type: 'manual', message: `${error}` });
    }
  };

  return (
    <div className="container mx-auto my-24 w-4/5 sm:w-1/3">
      <p className="font-bold text-xl mb-4">Войдите в свой аккаунт</p>
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
        {dbError}

        <div className="flex justify-between">
          <Button className="py-2 mt-4" type="submit">
            Войти
          </Button>
          <Link className="py-2 mt-4" type="button" to="/signin">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AuthorizationPage;
