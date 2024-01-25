/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { User } from '../features/Auth/types/type';

export const FetchLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ user: User; message: string }> => {
  const data = await fetch('/api/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return data.json();
};

export const FetchSignin = async ({
  name,
  email,
  password,
  phone,
}: {
  name: string;
  email: string;
  password: string;
  phone: string;
}): Promise<{ user: User; message: string }> => {
  const data = await fetch('/api/auth/signin', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name, email, password, phone }),
  });

  return data.json();
};

export const FetchLogout = async (): Promise<{ message: string }> => {
  const data = await fetch('/api/auth/logout');
  return data.json();
};

export const FetchCheckUser = async (): Promise<{ user: User; message: string }> => {
  const data = await fetch('/api/auth/check');
  return data.json();
};
