export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type StateAuth = {
  user: User | undefined;
};

export type Authentication = {
  email: string;
  password: string;
};

export type Registration = {
  name: string;
  email: string;
  password: string;
  phone: string;
};
