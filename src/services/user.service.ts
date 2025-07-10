import { FindOptions, Op, Order } from 'sequelize';

import User from '@/models/user.model';
import { UserCreateRequest, UserData, UserDataList, UserFilters, UserUpdateRequest } from '@/types/users.type';

class UserService {
  public constructor() {}

  public async create(appId: string, data: UserCreateRequest): Promise<UserData> {
    const user = await User.create({ applicationId: appId, ...data });
    return user.get({ plain: true });
  }

  public async getOne(filters: UserFilters, params: FindOptions = {}): Promise<UserData | null> {
    return User.findOne({ where: { ...filters }, ...params });
  }

  public async getAllAndCount(filters: UserFilters, params: FindOptions = {}): Promise<UserDataList> {
    const { id, limit = 10, page = 1, find, order = 'desc' } = filters;
    const offset = (page - 1) * limit;
    const orderBy: Order = [['createdAt', order.toUpperCase() as 'ASC' | 'DESC']];

    const whereConditions =
      find && find.trim()
        ? {
            applicationId: id,
            [Op.or]: [{ name: { [Op.iLike]: `%${find.trim()}%` } }, { email: { [Op.iLike]: `%${find.trim()}%` } }],
          }
        : { applicationId: id };

    return User.findAndCountAll({
      where: whereConditions,
      limit,
      offset,
      order: orderBy,
      distinct: true,
      ...params,
    });
  }

  public async update(filters: UserFilters, data: UserUpdateRequest): Promise<UserData | null> {
    const [affectedCount, affectedRows] = await User.update(data, {
      where: { ...filters },
      returning: true,
    });

    if (affectedCount === 0 || !affectedRows?.[0]) {
      return null;
    }

    return affectedRows[0].get({ plain: true });
  }
}

export default new UserService();
