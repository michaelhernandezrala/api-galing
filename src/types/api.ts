export type SuccessResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
  errorCode?: string;
};

export type HealthResponse = {
  statusCode: 'ok' | 'degraded' | 'down';
  version: string;
  uptime: number;
  checks?: {
    database?: 'healthy' | 'unhealthy';
    claude?: 'healthy' | 'unhealthy';
    externalApis?: 'healthy' | 'unhealthy';
  };
};

export type ListAnalysisResponse = {
  analyses: Array<{
    id: string;
    createdAt: string;
    status: string;
    target: {
      level: string;
      stack: string;
    };
  }>;
  total: number;
  page: number;
  limit: number;
};
