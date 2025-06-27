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
