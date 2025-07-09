import bcrypt from 'bcrypt';

import config from '@/config/config';

class CryptoHelper {
  public constructor() {}

  public async hash(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, config.crypto.saltRounds);
  }
}

export default new CryptoHelper();
