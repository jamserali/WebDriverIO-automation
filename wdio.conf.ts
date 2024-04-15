import type { Options } from '@wdio/types';
import {
    parseTagsFromCommandLine,
    setUpAfter,
    setUpBefore,
    setUpOnComplete,
    setUpOnPrepare,
} from './core/utils/hooks.ts';
import { baseConfig, setup } from './core/config/project-config.ts';
import { setUpServices } from './core/mobile/mobile-config.ts';
import { DeviceCapabilities, mobileAppConfig } from './core/config/device-capabilities.ts';
import { setUpReporter } from './core/utils/reporter.ts';


await setup();
export function setupCapabilities(): Options.Testrunner['capabilities'] {
    return new DeviceCapabilities().getCapabilities() as any[];
}

export function setLoggerLevel(): Options.Testrunner['logLevel'] {
    //trace | debug | info | warn | error | silent
    return 'info';
}

export function setSpecs(): string[] {
    return ['./tests/features/**/*.feature'];
}

export function setCucumberOpts(): Options.Testrunner['cucumberOpts'] {
    const myTagExpression = parseTagsFromCommandLine();
    return {
        require: ['./tests/steps/**/*.ts'],
        backtrace: false,
        requireModule: ['ts-node/register'],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        timeout: 60000,
        tags: myTagExpression,
        ignoreUndefinedDefinitions: false
    };
}

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    ...((baseConfig.isMobileApp && !baseConfig.isApiTest) ? mobileAppConfig : {}),
    specs: setSpecs(),
    exclude: [],
    maxInstances: 5,
    capabilities: setupCapabilities(),
    logLevel: setLoggerLevel(),
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    services: setUpServices(),
    reporters: setUpReporter(),
    cucumberOpts: setCucumberOpts(),
    onPrepare: setUpOnPrepare(),
    before: setUpBefore(),
    onComplete: setUpOnComplete(),
    after: setUpAfter(),
}
