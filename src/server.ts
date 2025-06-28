import app from '@/app';
import ConfigManager from './config/config-manager';

const PORT = ConfigManager.getInstance().getProperty('port');

app.listen(PORT, () => {
  console.log();
});
