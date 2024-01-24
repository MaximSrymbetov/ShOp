/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { User } from '../features/Auth/types/type';

export const FetchLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ userDB: User; message: string }> => {
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
}): Promise<{ userDB: User; message: string }> => {
  const data = await fetch('/api/auth/signin', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name, email, password, phone }),
  });

  return data.json();
};

export const FetchLogout = async (): Promise<void> => {
  const data = await fetch('/api/auth/logout');
  // eslint-disable-next-line @typescript-eslint/return-await
  return await data.json();
};
