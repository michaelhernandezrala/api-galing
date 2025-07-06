import _ from 'lodash';

import { Config } from '@/types/config';
import config from './config';

class ConfigManager {
  private static instance: ConfigManager;
  private config: Config;

  private constructor() {
    this.config = config;
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public getProperty(key: string): string | number | null | undefined | boolean {
    return _.get(this.config, key);
  }
}

export default ConfigManager;
