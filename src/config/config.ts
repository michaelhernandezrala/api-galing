import 'dotenv/config';

import Config from '@/types/config';

const config: Config = {
  env: process.env['ENV'] ?? 'LOCAL',
  port: Number.parseInt(process.env['PORT'] ?? '3602'),
  logger: {
    level: process.env['LOG_LEVEL'] ?? 'info',
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
