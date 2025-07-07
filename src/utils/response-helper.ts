import { Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { SuccessResponse } from '@/types/api';

class ResponseHelper {
  public constructor() {}

  public ok<T>(res: Response, data?: T, count?: number): void {
    this.sendSuccessResponse(res, StatusCodes.OK, ReasonPhrases.OK, data, count);
  }

  public created<T>(res: Response, data?: T): void {
    this.sendSuccessResponse(res, StatusCodes.CREATED, ReasonPhrases.CREATED, data);
  }

  public noContent(res: Response): void {
    res.status(StatusCodes.NO_CONTENT).send();
  }

  private sendSuccessResponse<T>(res: Response, statusCode: number, message: string, data?: T, count?: number): void {
    const response: SuccessResponse<T> = {
      statusCode,
      message,
    };

    if (count !== undefined && count !== null) {
      response.count = count;
    }

    if (data) {
      response.data = data;
    }

    res.status(response.statusCode).json(response);
  }

  public badRequest(res: Response, message = ReasonPhrases.BAD_REQUEST) {
    this.sendErrorResponse(res, StatusCodes.BAD_REQUEST, message);
  }

  public unauthorized(res: Response, message = ReasonPhrases.UNAUTHORIZED): void {
    this.sendErrorResponse(res, StatusCodes.UNAUTHORIZED, message);
  }

  public forbidden(res: Response, message = ReasonPhrases.FORBIDDEN): void {
    this.sendErrorResponse(res, StatusCodes.FORBIDDEN, message);
  }

  public notFound(res: Response, message = ReasonPhrases.NOT_FOUND): void {
    this.sendErrorResponse(res, StatusCodes.NOT_FOUND, message);
  }

  public conflict(res: Response, message = ReasonPhrases.CONFLICT): void {
    this.sendErrorResponse(res, StatusCodes.CONFLICT, message);
  }

  public tooManyRequests(res: Response, message = ReasonPhrases.TOO_MANY_REQUESTS): void {
    this.sendErrorResponse(res, StatusCodes.TOO_MANY_REQUESTS, message);
  }

  public error(res: Response, message = ReasonPhrases.INTERNAL_SERVER_ERROR): void {
    this.sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  public custom(res: Response, statusCode: number, message: string): void {
    this.sendErrorResponse(res, statusCode, message);
  }

  private sendErrorResponse(res: Response, statusCode: number, message: string): void {
    const response = {
      statusCode,
      message,
    };

    res.status(response.statusCode).json(response);
  }
}

export default new ResponseHelper();
