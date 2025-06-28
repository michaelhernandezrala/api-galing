import { Request, Response } from 'express';

import { StartAnalysisData, SuccessResponse } from '@/types/api';

export const startAnalysis = async (_req: Request, res: Response) => {
  const analysisData: StartAnalysisData = {
    analysisId: Math.random().toString(36).substring(7),
    status: 'started',
    estimatedTime: 45,
  };

  const response: SuccessResponse<StartAnalysisData> = {
    statusCode: 200,
    message: 'Ok',
    data: analysisData,
  };

  res.status(200).json(response);
};
