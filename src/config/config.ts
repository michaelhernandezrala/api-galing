import 'dotenv/config';

import Config from '@/types/config';

const config: Config = {
  env: process.env['ENV'] ?? 'LOCAL',
  port: Number.parseInt(process.env['PORT'] ?? '3602'),
  logger: {
    level: process.env['LOG_LEVEL'] ?? 'info',
  },
  crypto: {
    saltRounds: Number.parseInt(process.env['CRYPTO_SALT_ROUNDS'] ?? '10'),
    secret: process.env['CRYPTO_SECRET_KEY'] ?? '',
    refreshSecret: process.env['CRYPTO_REFRESH_SECRET_KEY'] ?? '',
  },
  databases: {
    sequelize: {
      host: process.env['DB_HOST'] ?? '',
      port: Number.parseInt(process.env['DB_PORT'] ?? '5432'),
      username: process.env['DB_USERNAME'] ?? '',
      password: process.env['DB_PASSWORD'] ?? '',
      database: process.env['DB_NAME'] ?? '',
      logging: false,
    },
  },
  models: {
    claude: {
      anthropicVersion: process.env['CLAUDE_ANTHROPIC_VERSION'] ?? '2023-06-01',
      xApiKey: process.env['CLAUDE_API_KEY'] ?? '',
      model: process.env['CLAUDE_MODEL'] ?? 'claude-3-5-sonnet-20241022',
      maxTokens: Number.parseInt(process.env['CLAUDE_MAX_TOKENS'] ?? '2000'),
      temperature: Number.parseInt(process.env['CLAUDE_TEMPERATURE'] ?? '0.3'),
      timeout: 30000,
      baseUrl: 'https://api.anthropic.com/v1',
    },
  },
};

export default config;
