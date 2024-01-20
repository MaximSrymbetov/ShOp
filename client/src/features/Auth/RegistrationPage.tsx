import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../App/api';
import { useAppDispatch } from '../../redux/store';

function RegistrationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const OnSubmitRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .FetchRegistration({ name, email, phone, password })
      .then((data) => {
        if (data.message === 'success') {
          dispatch({ type: 'auth/registration', payload: data.userDB });
          navigate('/authorization');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={OnSubmitRegister}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">FFFF</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

// const res = await fetch('/api/auth/login', {
//   method: 'post',
//   headers: { 'Content-type': 'application/json' },
//   body: JSON.stringify({ email, password }),
// });
// const data = res.json();
// if (data.success === 'success') {
//   dispatch({ type: 'auth/authorization', payload: data.user });
//   navigate('/');
// }
