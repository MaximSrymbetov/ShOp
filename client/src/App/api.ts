/* eslint-disable import/prefer-default-export */

import type { User } from '../features/Auth/types/type';

export const FetchAuthUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const data = await fetch('/api/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return data.json();
};

export const FetchRegistration = async ({
  name,
  email,
  password,
  phone,
}: {
  name: string;
  email: string;
  password: string;
  phone: string;
}): Promise<{ userDB: User; message: string }> => {
  const data = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name, email, password, phone }),
  });

  return data.json();
};

export const FetchLogout = async () => {
  const data = await fetch('/api/auth/logout');

  return await data.json();
};