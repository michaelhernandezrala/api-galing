import { FindOptions } from 'sequelize';

import User from '@/models/user.model';
import { UserCreateRequest, UserData, UserFilters } from '@/types/users.type';

class UserService {
  public constructor() {}

  public async create(appId: string, data: UserCreateRequest): Promise<UserData> {
    const user = await User.create({ applicationId: appId, ...data });
    return user.get({ plain: true });
  }

  public async getOne(filters: UserFilters, params: FindOptions = {}): Promise<UserData | null> {
    return User.findOne({ where: { ...filters }, ...params });
  }
}

export default new UserService();
