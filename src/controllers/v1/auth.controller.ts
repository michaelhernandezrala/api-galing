import { Request, Response } from 'express';
import IsEmail from 'isemail';

import userService from '@/services/user.service';
import { LoginRequest } from '@/types/auth.types';
import cryptoHelper from '@/utils/crypto-helper';
import responseHelper from '@/utils/response-helper';

export const login = async (req: Request, res: Response) => {
  const payload: LoginRequest = req.body;

  const isEmail = IsEmail.validate(payload.email);
  if (!isEmail) {
    responseHelper.badRequest(res);
    return;
  }

  const user = await userService.getOne({ email: payload.email }, { includePassword: true, raw: true });
  if (!user) {
    responseHelper.notFound(res);
    return;
  }
  const isPasswordCorrect = await cryptoHelper.compare(payload.password, user!.password!);
  if (!isPasswordCorrect) {
    responseHelper.badRequest(res);
    return;
  }

  delete user.password;
  const accessToken = await cryptoHelper.generateAccessToken(user);
  const refreshToken = await cryptoHelper.generateRefreshToken(user);

  const response = { user, tokens: { access: accessToken, refresh: refreshToken } };
  responseHelper.ok(res, response);
};

export const refresh = async (req: Request, res: Response) => {
  const payload = req.body;

  const decoded = cryptoHelper.verifyRefreshToken(payload.refreshToken);
  console.log(decoded);
  const filters = { id: decoded.id, applicationId: decoded.applicationId };
  const user = await userService.getOne(filters, { raw: true });
  if (!user) {
    responseHelper.notFound(res);
    return;
  }

  const accessToken = await cryptoHelper.generateAccessToken(user);
  const refreshToken = await cryptoHelper.generateRefreshToken(user);

  const response = { tokens: { access: accessToken, refresh: refreshToken } };
  responseHelper.ok(res, response);
};
