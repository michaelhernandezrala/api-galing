type UserType = 'human' | 'server';

export type UserCreateRequest = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  serverKey?: string | null;
  type: UserType;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserUpdateRequest = {
  name?: string | null;
  enabled?: boolean;
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

export type UserDataList = {
  count: number;
  rows: UserData[];
};

export type UserFilters = {
  id?: string;
  email?: string;
  limit?: number;
  page?: number;
  order?: 'asc' | 'desc';
  find?: string;
};
