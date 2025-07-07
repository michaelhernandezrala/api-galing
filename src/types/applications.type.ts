export type ApplicationCreateRequest = {
  name: string;
  description?: string;
  email: string;
  password: string;
};

export type ApplicationUpdateRequest = {
  name?: string;
  description?: string;
};

type ApplicationPlan = 'free' | 'pro' | 'premium';

export type ApplicationData = {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  plan: ApplicationPlan;
  createdAt: Date;
  updatedAt: Date;
};

export type ApplicationFilters = {
  id?: string;
};
