import { Request, Response } from 'express';

import config from '@/config/config';
import ClaudeService from '@/services/claude.service';
import ProfileAnalyzerService from '@/services/profile-analyzer.service';
import { AnalysisResponse } from '@/types/analysis';
import { SuccessResponse } from '@/types/api';

export const startAnalysis = async (req: Request, res: Response) => {
  const payload = req.body;

  const claudeService = new ClaudeService(config.models.claude);
  const analyzer = new ProfileAnalyzerService(claudeService);

  const result = await analyzer.analyze(payload);

  const response: SuccessResponse<AnalysisResponse> = {
    statusCode: 200,
    message: 'Ok',
    data: result,
  };

  res.status(200).json(response);
};
