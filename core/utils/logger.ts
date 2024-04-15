import * as winston from 'winston';
import * as process from 'process';

export const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

export class CustomLogger {
  private infoMsgs: string[] = [];
  // @ts-ignore
  private static customLogInstance: CustomLogger = null;

  static getLogger() {
    if (CustomLogger.customLogInstance == null) {
      CustomLogger.customLogInstance = new CustomLogger();
    }

    return CustomLogger.customLogInstance;
  }

  public log(msg: string | number | Response | JSON | Map<string, string>) {
    if (msg instanceof Response) {
      msg = JSON.stringify(msg.json);
    }
    if (msg instanceof Map) {
      msg = JSON.stringify(msg);
    }

    const msgToWrite = `${new Date().toLocaleString()} : ${msg.toString()}`;
    this.infoMsgs.push(msgToWrite);

    if (process.env.LOG_TO_CONSOLE === 'true') {
      console.log(msgToWrite);
    }
  }

  public logJson(json: JSON) {
    this.log(JSON.stringify(json));
  }

  public getMsgs() {
    return this.infoMsgs;
  }

  public clear() {
    this.infoMsgs = [];
  }
}
