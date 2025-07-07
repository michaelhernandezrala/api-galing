type UserType = 'human' | 'server';

export type UserCreateRequest = {
  name?: string;
  email?: string;
  password?: string;
  serverKey?: string;
  role: UserType;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserData = {
  id: string;
  applicationId: string;
  name?: string;
  email?: string;
  password?: string;
  serverKey?: string;
  type: UserType;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserFilters = {
  id?: string;
  email?: string;
};
