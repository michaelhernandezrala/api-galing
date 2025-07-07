import { FindOptions } from 'sequelize';

import PLAN_FEATURES from '@/constants/plan-features';
import sequelize from '@/lib/sequelize';
import ApplicationFeature from '@/models/application-feature';
import Application from '@/models/application.model';
import Feature from '@/models/feature.model';
import User from '@/models/user.model';
import {
  ApplicationCreateRequest,
  ApplicationData,
  ApplicationFilters,
  ApplicationUpdateRequest,
} from '@/types/applications.type';

class ApplicationService {
  public constructor() {}

  public async create(data: ApplicationCreateRequest): Promise<ApplicationData> {
    return await sequelize.transaction(async transaction => {
      const applicationData = { name: data.name, plan: 'free' };
      const application = await Application.create(applicationData, { transaction });

      const userData = { applicationId: application.id, email: data.email, password: data.password, type: 'human' };
      await User.create(userData, { transaction });

      const planFeatureCodes = PLAN_FEATURES.free.map(pf => pf.code);
      const features = await Feature.findAll({ where: { code: planFeatureCodes }, transaction });
      const applicationFeatures = features.map(feature => ({ applicationId: application.id, featureId: feature.id }));
      await ApplicationFeature.bulkCreate(applicationFeatures, { transaction });

      return application.get({ plain: true });
    });
  }

  public async getOne(filters: ApplicationFilters, params: FindOptions = {}): Promise<ApplicationData | null> {
    return Application.findOne({ where: { ...filters }, ...params });
  }

  public async update(filters: ApplicationFilters, data: ApplicationUpdateRequest): Promise<ApplicationData | null> {
    const [affectedCount, affectedRows] = await Application.update(data, {
      where: { ...filters },
      returning: true,
    });

    if (affectedCount === 0 || !affectedRows?.[0]) {
      return null;
    }

    return affectedRows[0].get({ plain: true });
  }

  public async destroy(filters: ApplicationFilters): Promise<void> {
    await Application.destroy({ where: { ...filters } });
  }
}

export default new ApplicationService();
