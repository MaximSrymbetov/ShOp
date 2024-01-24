export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type StateAuth = {
  user: User | undefined;
};

export type Authorization = {
  email: string;
  password: string;
};

export type Registration = {
  name: string;
  phone: string;
  email: string;
  password: string;
};
