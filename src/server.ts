import app from '@/app';
import ConfigManager from './config/config-manager';
import Logger from './utils/logger';

const PORT = ConfigManager.getInstance().getProperty('port');

app.listen(PORT, () => {
  const logger: Logger = Logger.getInstance();
  logger.info({ message: 'Server started successfully', port: PORT });
});
