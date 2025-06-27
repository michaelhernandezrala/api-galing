import Config from '@/types/config';

const config: Config = {
  env: process.env['ENV'] ?? 'LOCAL',
  port: Number.parseInt(process.env['PORT'] ?? '3602'),
  logger: {
    level: process.env['LOG_LEVEL'] ?? 'info',
  },
};

export default config;
