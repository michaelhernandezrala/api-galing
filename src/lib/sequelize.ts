import { Sequelize } from 'sequelize-typescript';

import config from '@/config/config';
import Application from '@/models/application.model';
import User from '@/models/user.model';

const models = [Application, User];

const sequelize = new Sequelize({
  ...config.databases.sequelize,
  dialect: 'postgres',
  models,
});

export default sequelize;
