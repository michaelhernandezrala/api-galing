import { AnalysisRequest } from '@/types/analysis';

interface AIProvider {
  analyzeProfile(request: AnalysisRequest): Promise<string>;

  isHealthy(): Promise<boolean>;
}

export default AIProvider;
