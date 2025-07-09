import { Request, Response } from 'express';
import IsEmail from 'isemail';

import applicationService from '@/services/application.service';
import userService from '@/services/user.service';
import { ApplicationCreateRequest, ApplicationData, ApplicationUpdateRequest } from '@/types/applications.type';
import responseHelper from '@/utils/response-helper';

export const create = async (req: Request, res: Response): Promise<void> => {
  const payload: ApplicationCreateRequest = req.body;

  const isEmail = IsEmail.validate(payload.email);
  if (!isEmail) {
    responseHelper.badRequest(res);
    return;
  }

  const user = await userService.getOne({ email: payload.email }, { raw: true });
  if (user) {
    responseHelper.conflict(res);
    return;
  }

  const response: ApplicationData = await applicationService.create(payload);
  responseHelper.created(res, response);
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  const { appId } = req.params;

  const response = await applicationService.getById(appId!);
  if (!response) {
    responseHelper.notFound(res);
    return;
  }

  responseHelper.ok(res, response);
};

export const update = async (req: Request, res: Response): Promise<void> => {
  const { appId } = req.params;
  const payload: ApplicationUpdateRequest = req.body;

  const application = await applicationService.getById(appId!);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  const response = await applicationService.update(appId!, payload);
  responseHelper.ok(res, response);
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
  const { appId } = req.params;

  const application = await applicationService.getById(appId!);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  await applicationService.destroy(appId!);
  responseHelper.noContent(res);
};
