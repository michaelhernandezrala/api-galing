import bcrypt from 'bcrypt';
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

import config from '@/config/config';
import { UserData } from '@/types/users.type';

const cryptoConfig = config.crypto;

interface TokenPayload extends JwtPayload {
  id: string;
  applicationId: string;
  name?: string;
  email?: string;
  type: string;
  enabled: boolean;
  tokenType: string;
  createdAt: Date;
  updatedAt: Date;
}

class CryptoHelper {
  public constructor() {}

  public async hash(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, config.crypto.saltRounds);
  }

  public async compare(plainText: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }

  public async generateAccessToken(data: UserData): Promise<string> {
    const secret = cryptoConfig.secret;
    const options: SignOptions = { expiresIn: '15min' };
    return jwt.sign({ ...data, tokenType: 'access' }, secret, options);
  }

  public async generateRefreshToken(data: UserData): Promise<string> {
    const secret = cryptoConfig.refreshSecret;
    const options: SignOptions = { expiresIn: '7d' };
    return jwt.sign({ ...data, tokenType: 'access' }, secret, options);
  }

  public async verifyAccessToken(token: string) {
    const secret = cryptoConfig.secret;
    return jwt.verify(token, secret);
  }

  public verifyRefreshToken(token: string): TokenPayload {
    const secret = cryptoConfig.refreshSecret;
    return jwt.verify(token, secret) as TokenPayload;
  }
}

export default new CryptoHelper();
