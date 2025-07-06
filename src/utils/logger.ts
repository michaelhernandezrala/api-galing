import winston, { format, transports } from 'winston';
import { consoleFormat } from 'winston-console-format';

import ConfigManager from '@/config/config-manager';

class Logger {
  private static instance: Logger;
  private client: winston.Logger;

  private constructor() {
    const configManager = ConfigManager.getInstance();

    this.client = winston.createLogger({
      level: configManager.getProperty('logger.level') as string,
      format: this.getFormatConfig(),
      transports: this.getTransportsConfig(),
    });
  }

  private getFormatConfig(): winston.Logform.Format {
    return format.combine(
      format.timestamp(),
      format.ms(),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    );
  }

  private getTransportsConfig(): winston.transport | winston.transport[] {
    return [
      new transports.Console({
        format: format.combine(
          format.colorize({ all: true }),
          format.padLevels(),
          consoleFormat({
            showMeta: true,
            metaStrip: ['timestamp', 'service'],
            inspectOptions: {
              depth: Infinity,
              colors: true,
              maxArrayLength: Infinity,
              breakLength: 120,
              compact: Infinity,
            },
          })
        ),
      }),
    ];
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  info<T>(message: T): void {
    this.client.info({ ...message });
  }

  debug<T>(message: T): void {
    this.client.debug({ ...message });
  }

  warn<T>(message: T): void {
    this.client.warn({ ...message });
  }

  error<T>(message: T): void {
    this.client.error({ ...message });
  }
}

export default Logger;
