import { WebBasePage } from './web-base-page.ts';

export class MobileBasePage extends WebBasePage{

  //Android and iOS specific methods

  public getContext() {
    return browser.getContext();
  }

  public switchContext(context: string) {
    return browser.switchContext(context);
  }

  public getContexts() {
    return browser.getContexts();
  }

  public getDeviceTime() {
    return browser.getDeviceTime();
  }

  public getPerformanceMetrics() {
    return browser.getPerformanceDataTypes();
  }

  public pressKeycode(keycode: number) {
    return browser.pressKeyCode(keycode);
  }

//  sendKeyEvent

  public getNetworkConnection() {
    return browser.getNetworkConnection();
  }

  public getCurrentActivity() {
    return browser.getCurrentActivity();
  }

  public getDeviceOrientation() {
    return browser.getOrientation();
  }

  public installApp(appPath: string) {
    return browser.installApp(appPath);
  }

  public isAppInstalled(bundleId: string) {
    return browser.isAppInstalled(bundleId);
  }

  public launchApp() {
    return browser.launchApp();
  }

  public activateApp(appId: string) {
    return browser.activateApp(appId);
  }

  public closeApp() {
    return browser.closeApp();
  }

  public removeApp(appId: string) {
    return browser.removeApp(appId);
  }

  public appBackground(seconds?: number) {
    return browser.execute('mobile: backgroundApp', {seconds: seconds});
  }




}