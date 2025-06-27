import { Request, Response } from 'express';

export const getHealth = async (_req: Request, res: Response) => {
  res.json({
    statusCode: 200,
    message: 'OK',
  });
};
