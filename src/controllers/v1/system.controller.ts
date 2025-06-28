import { Request, Response } from 'express';

import { HealthData, SuccessResponse } from '@/types/api';

export const getHealth = async (_req: Request, res: Response) => {
  const healthData: HealthData = {
    status: 'ok',
    version: '1.0.0',
    uptime: process.uptime(),
  };

  const response: SuccessResponse<HealthData> = {
    statusCode: 200,
    message: 'Ok',
    data: healthData,
  };

  res.status(200).json(response);
};
