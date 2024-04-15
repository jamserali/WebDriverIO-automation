import { BasePage } from 'core/browser/base-page';
export class ScenarioContext {
  private dataStore: Map<string, string | number | string[] | object | boolean | JSON | BasePage>;

  constructor() {
    this.dataStore = new Map();
  }

  public setValue(dataKey: string, data: string | number | string[] | object | boolean | JSON | BasePage) {
    this.dataStore.set(dataKey, data);
  }

  public getValue(dataKey: string) {
    return this.dataStore.get(dataKey);
  }

  public clear() {
    this.dataStore.clear();
  }

  public isPresent(dataKey: string) {
    return this.dataStore.has(dataKey);
  }

  setNewPage(basePage: BasePage) {
    this.dataStore.set('newBasePage', basePage);
  }

  getNewPage() {
    return this.dataStore.get('newBasePage');
  }

  setTestAccountKeys(testAccountKeys: string[]) {
    this.dataStore.set('testAccountKeys', testAccountKeys);
  }

  getTestAcccountkeys() {
    return this.dataStore.get('testAccountKeys') as string[];
  }

  // public storeDataInArray(dataKey: string, data: string) {
  //   const dataArray = this.getArrayData(dataKey);
  //   dataArray.push(data);
  //   scenarioContext.setValue(dataKey, dataArray);
  // }
  //
  // public getArrayData(dataKey: string) {
  //   const dataArray = scenarioContext.getValue(dataKey) as string[];
  //
  //   return dataArray === undefined ? [] : dataArray;
  // }
}
