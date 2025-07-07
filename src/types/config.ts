type Config = {
  env: string;
  port: number;
  logger: {
    level: string;
  };
  databases: {
    sequelize: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
      logging: boolean;
    };
  };
  models: {
    claude: {
      anthropicVersion: string;
      xApiKey: string;
      model: string;
      maxTokens: number;
      temperature: number;
      timeout: number;
      baseUrl: string;
    };
  };
};

export default Config;
