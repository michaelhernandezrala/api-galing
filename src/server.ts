import app from '@/app';
import ConfigManager from './config/ConfigManager';

const PORT = ConfigManager.getInstance().getProperty('port');

app.listen(PORT, () => {
  console.log();
});
