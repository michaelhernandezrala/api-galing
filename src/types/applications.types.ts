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

export type Application = {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  plan: ApplicationPlan;
  createdAt: string;
  updatedAt: string;
};
