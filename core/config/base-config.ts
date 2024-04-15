import * as fs from 'fs';
import { envData } from './project-config';
import { TestConfig } from './model/test-config';

interface JSONObject {
  [key: string]: any;
}
const fileName = './tests/testData/test-config.json';

export enum Environment {
  PROD = 'production',
  STAGING = 'staging',
  INTEGRATION = 'integration',
}

export class BaseConfig {
  private config: TestConfig | null = null;
  private readonly CONFIG_FILE = fileName;
  private CONFIG_JSON_CONTENTS: JSONObject | null = null;

  private loadConfig(): JSONObject {
    if (this.CONFIG_JSON_CONTENTS == null) {
      try {
        const fileContents = fs.readFileSync(this.CONFIG_FILE, 'utf-8');
        this.CONFIG_JSON_CONTENTS = JSON.parse(fileContents);
      } catch (e) {
        console.error(e);
      }
    }

    return this.CONFIG_JSON_CONTENTS;
  }

  public getConfig(countryName?: string): TestConfig | null {
    if (countryName == undefined) {
      countryName = envData.COUNTRY;
    }
    try {
      if (countryName.toUpperCase() === 'DDEN') {
        countryName = countryName.substring(0, 3);
      }

      const jsonObject = this.loadConfig();
      let countryWithOutLocale: string;
      if (countryName.length >= 3) {
        countryWithOutLocale = countryName.substring(0, 2);
      } else {
        countryWithOutLocale = countryName;
      }

      return this.convertToTestConfig(
        countryName,
        countryWithOutLocale,
        jsonObject[countryWithOutLocale.toLowerCase()],
      );
    } catch (e) {
      console.error(`Could not find Config file to load test configuration: ${e.message}`);

      return null;
    }
  }

  private convertToTestConfig(country: string, countryWithOutLocale: string, regionWiseJson: JSONObject): TestConfig {
    const localeJson = this.getLocaleJson(country, regionWiseJson['locale-config']);
    const testConfig: TestConfig = new TestConfig();
    testConfig.setCountryCode(countryWithOutLocale);
    if (countryWithOutLocale.toUpperCase() == 'DD') {
      testConfig.setCountry('TH');
    } else {
      testConfig.setCountry(countryWithOutLocale);
    }
    testConfig.setName(regionWiseJson.name);
    testConfig.setLocale(localeJson.locale);
    const baseAddress = this.withUrlMapping(this.withTestEnvironment(regionWiseJson.baseAddress), localeJson);
    testConfig.setBaseAddress(this.withHttps(baseAddress));
    if (localeJson.locale === 'ms') {
      testConfig.setAdminUrl(
        this.withHttps(regionWiseJson.admin + '.' + baseAddress)
          .replace('www.', '')
          .replace('/bm', ''),
      );
      testConfig.setAgentUrl(
        this.withHttps(regionWiseJson.agent + '.' + baseAddress)
          .replace('www.', '')
          .replace('/bm', ''),
      );
    } else {
      testConfig.setAdminUrl(this.withHttps(regionWiseJson.admin + '.' + baseAddress).replace('www.', ''));
      testConfig.setAgentUrl(this.withHttps(regionWiseJson.agent + '.' + baseAddress).replace('www.', ''));
      testConfig.setAgentTrialAccountUrl(this.withHttps(baseAddress).replace('www.', ''));
    }
    testConfig.setAgentOfferingsUrl(`www.${localeJson.agentOfferings}.${regionWiseJson.baseAddress}`);
    const commercialUrl = regionWiseJson.commercial;
    if (commercialUrl) {
      testConfig.setCommercialUrl(this.withHttps(this.withTestEnvironment(commercialUrl)));
    }
    testConfig.setLanguage(regionWiseJson.language);
    testConfig.setPhoneCode(regionWiseJson.phoneCode);
    testConfig.setSiteCode(regionWiseJson.siteCode);
    testConfig.setCommercialSiteCode(regionWiseJson.commercialSiteCode);

    return testConfig;
  }
  private withHttps(address: string): string {
    if (
      envData.ENVIRONMENT.toLowerCase() === Environment.STAGING ||
      envData.ENVIRONMENT.toLowerCase() === Environment.INTEGRATION ||
      envData.ENVIRONMENT.toLowerCase() === Environment.PROD
    ) {
      return `https://www.${address}`;
    } else {
      return `http://www.${address}`;
    }
  }
  private withTestEnvironment(address: string): string {
    if (envData.ENVIRONMENT.toLowerCase() === Environment.PROD) {
      return address;
    }

    return `${envData.ENVIRONMENT.toLowerCase()}.${address}`;
  }

  private withUrlMapping(address: string, localConfig: any): string {
    if (localConfig.url_mapping !== '') {
      return `${address}/${localConfig.url_mapping}`;
    }

    return address;
  }

  private getLocaleJson(region: string, localeJson: any): any {
    return localeJson[region.toLowerCase()];
  }
}
