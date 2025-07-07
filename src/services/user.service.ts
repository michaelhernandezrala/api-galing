import { FindOptions } from 'sequelize';

import User from '@/models/user.model';
import { UserData, UserFilters } from '@/types/users.type';

class UserService {
  public constructor() {}

  public async getOne(filters: UserFilters, params: FindOptions = {}): Promise<UserData | null> {
    return User.findOne({ where: { ...filters }, ...params });
  }
}

export default new UserService();
