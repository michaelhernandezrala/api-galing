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

export type FeatureData = {
  code: string;
  description: string;
};

export type ApplicationData = {
  id: string;
  name: string;
  description: string | null;
  enabled: boolean;
  plan: ApplicationPlan;
  features: FeatureData[] | [];
  createdAt: Date;
  updatedAt: Date;
};
