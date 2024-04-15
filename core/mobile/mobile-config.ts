import type { Options } from '@wdio/types';
import { baseConfig } from '../config/project-config.ts';

export function setUpServices(): Options.Testrunner['services'] {
  if (baseConfig.device === 'android' || baseConfig.device === 'ios') {
    return baseConfig.uiConfig.isRemote ? ['browserstack'] : ['appium'];
  }
  return [];
}

