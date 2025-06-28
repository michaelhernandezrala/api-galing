import type AIProvider from '@/interfaces/AIProvider';
import type { AnalysisRequest, AnalysisResponse } from '@/types/analysis';

class ProfileAnalyzerService {
  private aiProvider: AIProvider; // ← Corregido typo

  public constructor(aiProvider: AIProvider) {
    this.aiProvider = aiProvider; // ← Corregido typo
  }

  async analyze(request: AnalysisRequest): Promise<AnalysisResponse> {
    const rawAnalysis = await this.aiProvider.analyzeProfile(request);
    return this.parseAIResponse(rawAnalysis);
  }

  private parseAIResponse(rawText: string): AnalysisResponse {
    try {
      const jsonStart = rawText.indexOf('{');
      const jsonEnd = rawText.lastIndexOf('}') + 1;
      const jsonText = rawText.slice(jsonStart, jsonEnd);

      return JSON.parse(jsonText);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to parse AI response');
    }
  }
}

export default ProfileAnalyzerService;
