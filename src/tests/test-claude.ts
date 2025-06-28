import config from '@/config/config';
import ClaudeService from '@/services/claude.service';
import { AnalysisRequest } from '@/types/analysis';

async function testClaude() {
  console.log('Testing Claude connection...');

  const claudeService = new ClaudeService(config.models.claude);
  const isWorking = await claudeService.isHealthy();

  console.log('Claude working:', isWorking);

  const fakeRequest: AnalysisRequest = {
    profiles: {
      github: 'johndoe',
      linkedin: 'john-doe-dev',
    },
    target: {
      level: 'senior',
      stack: 'fullstack',
      platforms: ['github', 'linkedin'],
    },
    options: {
      includeRecommendations: true,
      detailedBreakdown: true,
    },
  };

  // Test del análisis
  const analysis = await claudeService.analyzeProfile(fakeRequest);
  console.log('Analysis result:', analysis);
}

testClaude().catch(console.error);
