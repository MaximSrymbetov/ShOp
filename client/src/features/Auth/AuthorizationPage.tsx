/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import type { User } from './types/type';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHeandlerSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<User> => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
    console.log(data);

    if (data.message === 'success') {
      dispatch({ type: 'auth/authorization', payload: data.user });
      navigate('/');
    }
  };
  return (
    <div>
      <form onSubmit={onHeandlerSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Авторизироваться</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
