export class RunContext {
  private dataStore: Map<string, string | number | string[] | object | boolean | JSON>;

  constructor() {
    this.dataStore = new Map();
  }

  public setValue(dataKey: string, data: string | number | string[] | object | boolean | JSON) {
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
}
