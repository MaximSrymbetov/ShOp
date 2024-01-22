/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import * as api from '../../App/api';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .FetchAuthUser({ email, password })
      .then((data) => {
        if (data.message === 'success') {
          dispatch({ type: 'auth/authorization', payload: data.userDB });
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
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
