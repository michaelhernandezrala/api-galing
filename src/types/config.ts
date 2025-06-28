type Config = {
  env: string;
  port: number;
  logger: {
    level: string;
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
