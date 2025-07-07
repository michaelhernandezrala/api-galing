import { Sequelize } from 'sequelize-typescript';

import config from '@/config/config';
import ApplicationFeature from '@/models/application-feature';
import Application from '@/models/application.model';
import Feature from '@/models/feature.model';
import User from '@/models/user.model';

const models = [Application, ApplicationFeature, Feature, User];

const sequelize = new Sequelize({
  ...config.databases.sequelize,
  dialect: 'postgres',
  models,
});

export default sequelize;
