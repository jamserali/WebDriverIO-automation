import type { Options } from '@wdio/types';


export function setUpReporter(): Options.Testrunner['reporters'] {
  return ['spec',['cucumberjs-json',{
    jsonFolder: './test-results/json-report/',
    language: 'en',
  }]];
}