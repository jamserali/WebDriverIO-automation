export class WebBasePage{

  public findElement(locator: string) {
    return $(locator);
  }

  public findElements(locator: string) {
    return $$(locator);
  }

  public navigate(url: string) {
    return browser.url(url);
  }

  public getCurrentUrl() {
    return browser.getUrl();
  }

  public getTitle() {
    return browser.getTitle();
  }

  public refresh() {
    return browser.refresh();
  }

  public back() {
    return browser.back();
  }

  public forward() {
    return browser.forward();
  }

  public close() {
    return browser.closeWindow();
  }

  public quit() {
    return browser.deleteSession();
  }

  public waitForUrlNavigation(url: string, timeout: number = 30000) {
    return browser.waitUntil(async () => await browser.getUrl() === url, { timeout: timeout });
  }

  public waitForUrlContainsNavigation(urlContains: string, timeout: number = 30000) {
    return browser.waitUntil(async () => (await browser.getUrl()).includes(urlContains), { timeout: timeout });
  }

  public waitForPageLoad(timeout: number = 30000) {
    return browser.waitUntil(async () => {
      return await browser.execute(() => document.readyState === 'complete');
    }, {
      timeout: timeout,
      timeoutMsg: `Page did not load within ${timeout / 1000} seconds`
    });
  }

  public waitForElementExist(locator: string, timeout: number = 30000) {
    return $(locator).waitForExist({ timeout: timeout });
  }

  public waitForElementVisible(locator: string, timeout: number = 30000) {
    return $(locator).waitForDisplayed({ timeout: timeout });
  }

  public waitForElementNotVisible(locator: string, timeout: number = 30000) {
    return $(locator).waitForDisplayed({ reverse: true, timeout: timeout });
  }

  public waitForElementClickable(locator: string, timeout: number = 30000) {
    return $(locator).waitForClickable({ timeout: timeout });
  }

  public waitForElementNotExist(locator: string, timeout: number = 30000) {
    return $(locator).waitForExist({ reverse: true, timeout: timeout });
  }

  // Now Actions

  public click(locator: string) {
    return $(locator).click();
  }

  public clearAndType(locator: string, text: string) {
      $(locator).clearValue().then(r => {
        return $(locator).setValue(text);
      });
  }

  public type(locator: string, text: string) {
    return $(locator).setValue(text);
  }

  public getText(locator: string) {
    return $(locator).getText();
  }

  public getAttribute(locator: string, attribute: string) {
    return $(locator).getAttribute(attribute);
  }

  public getCssProperty(locator: string, cssProperty: string) {
    return $(locator).getCSSProperty(cssProperty);
  }

  public getTagName(locator: string) {
    return $(locator).getTagName();
  }

  public executeScript(script: string, ...args: any[]) {
    return browser.execute(script, ...args);
  }

  public scrollIntoView(locator: string) {
    return $(locator).scrollIntoView();
  }

 public executeAsyncScript(script: string, ...args: any[]) {
    return browser.executeAsync(script, ...args);
  }

  public switchToFrame(locator: string) {
    return browser.switchToFrame($(locator));
  }

  public switchToParentFrame() {
    return browser.switchToParentFrame();
  }

  public switchToWindow(windowHandle: string) {
    return browser.switchToWindow(windowHandle);
  }

  public switchToWindowByIndex(index: number) {
    return browser.switchToWindow(browser.getWindowHandles()[index]);
  }

  public acceptAlert() {
    return browser.acceptAlert();
  }

  public dismissAlert() {
    return browser.dismissAlert();
  }

  public getAlertText() {
    return browser.getAlertText();
  }

  public isClickable(locator: string) {
    return $(locator).isClickable();
  }

  public isDisplayed(locator: string) {
    return $(locator).isDisplayed();
  }

  public isEnabled(locator: string) {
    return $(locator).isEnabled();
  }

  public isSelected(locator: string) {
    return $(locator).isSelected();
  }

  public isExisting(locator: string) {
    return $(locator).isExisting();
  }

  public isFocused(locator: string) {
    return $(locator).isFocused();
  }

  public isDisplayedInViewport(locator: string) {
    return $(locator).isDisplayedInViewport();
  }

  public getLocation(locator: string) {
    return $(locator).getLocation();
  }

  public getParentElement(locator: string) {
    return $(locator).parentElement();
  }

  public selectByAttribute(locator: string, attribute: string, value: string) {
    return $(locator).selectByAttribute(attribute, value);
  }

  public selectByIndex(locator: string, index: number) {
    return $(locator).selectByIndex(index);
  }

  public selectByVisibleText(locator: string, text: string) {
    return $(locator).selectByVisibleText(text);
  }







}