import type {
  AnalysisMetadata,
  DeveloperLevel,
  PlatformScore,
  PlatformType,
  ProfileInput,
  TechStack,
} from './platforms/common';

export type ComparisonTarget = {
  level: DeveloperLevel;
  stack: TechStack;
  platforms: PlatformType[];
};

export type SuccessResponse<T> = {
  statusCode: number;
  message: string;
  count?: number;
  data?: T;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
};

export type HealthData = {
  status: 'ok' | 'degraded' | 'down';
  version: string;
  uptime: number;
  checks?: {
    database?: 'healthy' | 'unhealthy';
    claude?: 'healthy' | 'unhealthy';
    externalApis?: 'healthy' | 'unhealthy';
  };
};

export type StartAnalysisData = {
  analysisId: string;
  status: 'started';
  estimatedTime: number;
};

export type StartAnalysisRequest = AnalysisRequest;

export type GetAnalysisData = AnalysisResponse;

export type ListAnalysisData = {
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

export type PlatformAnalysis = {
  platform: PlatformType;
  score: PlatformScore;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  missingData: string[];
};

export type OverallAnalysis = {
  totalScore: number;
  averageScore: number;
  platformBreakdown: PlatformAnalysis[];
  topStrengths: string[];
  criticalWeaknesses: string[];
  priorityActions: string[];
};

export type BenchmarkComparison = {
  target: ComparisonTarget;
  userScore: number;
  benchmarkScore: number;
  gap: number;
  percentile: number;
  competitiveAdvantage: string[];
  areasToImprove: string[];
};

export type AnalysisRequest = {
  profiles: ProfileInput;
  target: ComparisonTarget;
  options?: {
    includeRecommendations?: boolean;
    detailedBreakdown?: boolean;
    compareToPeers?: boolean;
  };
};

export type AnalysisResponse = {
  metadata: AnalysisMetadata;
  input: ProfileInput;
  target: ComparisonTarget;
  analysis: OverallAnalysis;
  benchmark: BenchmarkComparison;
  generatedAt: string;
  validUntil: string;
};
