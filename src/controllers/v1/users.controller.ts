import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import applicationService from '@/services/application.service';
import userService from '@/services/user.service';
import { UserCreateRequest } from '@/types/users.type';
import cryptoHelper from '@/utils/crypto-helper';
import responseHelper from '@/utils/response-helper';

export const create = async (req: Request, res: Response) => {
  const { appId } = req.params;
  let payload: UserCreateRequest = req.body;

  const application = await applicationService.getById(appId!);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  payload = await _formatUserCreateRequest(payload);
  if (payload.type === 'human' && payload.email) {
    const existingUser = await userService.getOne({ email: payload.email }, { raw: true });
    if (existingUser) {
      responseHelper.conflict(res);
      return;
    }
  }
  const response = await userService.create(appId!, payload);
  responseHelper.created(res, response);
};

const _formatUserCreateRequest = async (data: UserCreateRequest): Promise<UserCreateRequest> => {
  if (data.type === 'human') {
    return {
      ...data,
      serverKey: null,
      password: await cryptoHelper.hash(data.password!),
    };
  }

  return {
    ...data,
    email: null,
    password: null,
    serverKey: uuidv4(),
  };
};

export const getUsers = async (req: Request, res: Response) => {
  const { appId } = req.params;
  const filters = req.query;

  const application = await applicationService.getById(appId!);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  filters['id'] = appId;
  const response = await userService.getAllAndCount(filters, { raw: true });
  console.log(response);
  responseHelper.ok(res, response.rows, response.count);
};

export const getById = async (req: Request, res: Response) => {
  const { appId, userId } = req.params;

  const application = await applicationService.getById(appId!);
  if (!application) {
    responseHelper.notFound(res);
    return;
  }

  const user = await userService.getOne({ id: userId! }, { raw: true });
  if (!user) {
    responseHelper.notFound(res);
    return;
  }

  responseHelper.ok(res, user);
};
