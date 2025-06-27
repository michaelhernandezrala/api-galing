export type PlatformType = 'github' | 'linkedin' | 'twitter' | 'stackoverflow' | 'medium';

export type AnalysisStatus = 'pending' | 'processing' | 'completed' | 'failed';

export type ScoreRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type DeveloperLevel = 'junior' | 'mid' | 'senior' | 'staff' | 'principal';

export type TechStack = 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'devops' | 'data' | 'ml';

export type PlatformScore = {
  platform: PlatformType;
  overall: ScoreRange;
  activity: ScoreRange;
  quality: ScoreRange;
  community: ScoreRange;
  consistency: ScoreRange;
};

export type ProfileInput = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  stackoverflow?: string;
  medium?: string;
};

export type AnalysisMetadata = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: AnalysisStatus;
  targetLevel: DeveloperLevel;
  targetStack: TechStack;
};
