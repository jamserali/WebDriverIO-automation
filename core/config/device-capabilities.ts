import { baseConfig } from './project-config.ts';
import * as fs from 'fs';

export class DeviceCapabilities {
  private static jsonFilePath = "./core/config/devices"

  private deviceType = baseConfig.uiConfig.device;
  public getCapabilities(): JSON[] {

    if(baseConfig.isApiTest) {
      return this.loadJsonFile('web')['api'] as JSON[];
    }
    let capabilities = this.loadJsonFile(this.deviceType.toString())[this.deviceType.toString()] as JSON[];
    capabilities = DeviceCapabilities.configureMobileCapabilities(capabilities);
    capabilities = DeviceCapabilities.configureWebCapabilities(capabilities);
    return capabilities
  }

  private static getFilePath(deviceType: string, isRemote: boolean): string {
    const folder = isRemote ? 'remote' : 'local';
    const deviceFolder = deviceType === 'desktop' || deviceType === 'tablet' || deviceType === 'mobile' ? 'web' : 'mobile';

    // If isApi is true, then the deviceType is 'api' and the folder is 'api'
    if (baseConfig.isApiTest) {
      return `${DeviceCapabilities.jsonFilePath}/web/api.json`; // As WDIO does not support API testing, we are using api.json for API testing in headless mode
    }
    return `${DeviceCapabilities.jsonFilePath}/${deviceFolder}/${folder}.json`;
  }


  private static loadData(filePath: string): any {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data.toString());
  }

  private loadJsonFile(deviceType: string): any {
    const filePath = DeviceCapabilities.getFilePath(deviceType, baseConfig.uiConfig.isRemote);
    return DeviceCapabilities.loadData(filePath);
  }

  private static configureMobileCapabilities(capabilities: JSON[]): JSON[] {
    const mobileCapabilities = capabilities as JSON[];
    mobileCapabilities.map((capability: any) => {
      if(baseConfig.isMobileApp) {
        //capability['appium:app'] = baseConfig.mobileAppConfig.path;
        if(baseConfig.isMobileApp && baseConfig.uiConfig.isRemote){
          capability['appium:app'] = baseConfig.mobileAppConfig.remotePath; // TODO: add remote path
        }
      }
    });
    return mobileCapabilities;
  }

  private static configureWebCapabilities(capabilities: JSON[]): JSON[] {
    if (!baseConfig.isMobileApp) {
      return capabilities.map(capability => {
        const browserType = capability['browserName'];
        const userAgentArgs = ['--user-agent=PG-Automation'];
        const headlessArg = baseConfig.uiConfig.headless ? '--headless' : '';

        if (browserType === 'chrome') {
          capability['goog:chromeOptions'] = { args: [...userAgentArgs, headlessArg].filter(Boolean) };
        } else if (browserType === 'firefox') {
          capability['moz:firefoxOptions'] = { args: [...userAgentArgs, headlessArg].filter(Boolean) };
        }

        return capability;
      });
    }
    return capabilities;
  }

}

export const mobileAppConfig = {
  port: 4723
}
