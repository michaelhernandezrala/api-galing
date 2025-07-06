import { Request, Response } from 'express';
import IsEmail from 'isemail';

import ApplicationService from '@/services/application.service';
import { Application, ApplicationCreateRequest, ApplicationUpdateRequest } from '@/types/applications.types';
import ResponseHelper from '@/utils/response-helper';

export const create = async (req: Request, res: Response): Promise<void> => {
  const payload: ApplicationCreateRequest = req.body;
  const responseHelper: ResponseHelper = ResponseHelper.getInstance();
  const applicationService: ApplicationService = new ApplicationService();

  const isEmail = IsEmail.validate(payload.email);
  if (!isEmail) {
    responseHelper.badRequest(res);
    return;
  }

  const response: Application = await applicationService.create(payload);
  responseHelper.created(res, response);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const { appId } = req.params;
  const responseHelper: ResponseHelper = ResponseHelper.getInstance();
  const applicationService: ApplicationService = new ApplicationService();

  const response: Application = await applicationService.getById(appId);
  if (!response) {
    responseHelper.notFound(res);
    return;
  }

  responseHelper.ok(res, response);
};

export const update = async (req: Request, res: Response): Promise<void> => {
  const { appId } = req.params;
  const payload: ApplicationUpdateRequest = req.body;
  const responseHelper: ResponseHelper = ResponseHelper.getInstance();
  const applicationService: ApplicationService = new ApplicationService();

  const application: Application = await applicationService.getById(appId);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  const response: Application = await applicationService.update(appId, payload);
  responseHelper.ok(res, response);
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
  const { appId } = req.params;
  const responseHelper: ResponseHelper = ResponseHelper.getInstance();
  const applicationService: ApplicationService = new ApplicationService();

  const application: Application = await applicationService.getById(appId);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  await applicationService.destroy(appId);
  responseHelper.ok(res);
};
