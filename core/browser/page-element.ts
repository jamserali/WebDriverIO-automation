// import { expect, Locator, selectors } from '@playwright/test';
// import { BasePage } from './base-page';
// import { PageLocator } from './page-locator';
// import { ElementOptions, FilterOptions, RoleType } from 'core/types/element-locator-type';
//
// export class PageElement {
//   private locator: Locator;
//   private page: BasePage;
//
//   constructor(pageLocator: PageLocator) {
//     this.locator = pageLocator.locator;
//     this.page = pageLocator.page;
//   }
//
//   public async click(forceClick?: boolean) {
//     if (forceClick) {
//       await this.locator.click({ force: true });
//     } else {
//       await this.locator.click();
//     }
//
//     return this;
//   }
//
//   public async clickWithOptions(options?: any) {
//     await this.locator.click(options);
//
//     return this;
//   }
//
//   public async waitForPageLoad() {
//     await this.page.waitForPageLoad();
//   }
//
//   public async clearAndType(text: string) {
//     await this.locator.click();
//     await this.locator.fill(text);
//   }
//
//   public async type(text: string) {
//     await this.locator.type(text);
//   }
//
//   public async fill(text: string) {
//     await this.locator.fill(text);
//   }
//
//   public async typeUsingKeyBoard(text: string) {
//     await this.locator.click();
//     await this.page.getRawPage().keyboard.insertText(text);
//   }
//
//   public async getInnerText() {
//     return await this.locator.innerText();
//   }
//
//   public async getText() {
//     return await this.locator.innerText();
//   }
//
//   public async getSrc() {
//     return await this.locator.getAttribute('src');
//   }
//
//   public async focus() {
//     await this.locator.focus();
//   }
//
//   public async dragAndDrop(destinationElem: PageElement) {
//     await this.locator.dragTo(destinationElem.locator);
//   }
//
//   public async waitFor(timeoutalue = 20000) {
//     await this.locator.waitFor({ state: 'attached', timeout: timeoutalue });
//
//     return this;
//   }
//
//   public async waitForVisible(timeout = 30000) {
//     await this.locator.waitFor({ state: 'visible', timeout: timeout });
//
//     return this;
//   }
//
//   public async isDisplayed() {
//     return await this.locator.isVisible();
//   }
//
//   public async getDataId() {
//     return await this.locator.getAttribute('data-listing-id');
//   }
//
//   public getElementByCss(cssLocator: string) {
//     return this.buildPageElement(this.locator.locator('css=' + cssLocator).first());
//   }
//
//   public async waitAndGetElementByCss(cssLocator: string) {
//     await this.waitForVisible();
//
//     return this.getElementByCss(cssLocator);
//   }
//
//   public getElementByText(text: string) {
//     return this.buildPageElement(this.locator.getByText(text, { exact: true }));
//   }
//
//   public async getElementsByTestId(automationId: string): Promise<PageElement[]> {
//     await this.waitForVisible();
//
//     return await this.getElementsByCss(`[data-automation-id='${automationId}']`);
//   }
//
//   public getElementByTestId(automationId: string): PageElement {
//     return this.getElementByTestAttributeId('data-automation-id', automationId);
//   }
//
//   public getElementByXpath(xpath: string): PageElement {
//     return this.buildPageElement(this.locator.locator('xpath=' + xpath).first());
//   }
//
//   public async isEnabled() {
//     return this.locator.isEnabled();
//   }
//
//   public async jsClick() {
//     await this.locator.dispatchEvent('click');
//   }
//
//   public async doubleClick() {
//     await this.locator.dblclick();
//   }
//
//   public async pressEnter() {
//     await this.locator.press('Enter');
//   }
//
//   public async pressKey(key: string) {
//     await this.locator.press(key);
//   }
//
//   public async hover() {
//     await this.locator.hover();
//   }
//   public async getHref() {
//     return await this.locator.getAttribute('href');
//   }
//
//   public async getClass() {
//     return await this.locator.getAttribute('class');
//   }
//
//   public async getAttribute(attrib_name): Promise<string> {
//     return await this.locator.getAttribute(attrib_name);
//   }
//
//   public async getElementsByCss(cssLocator: string): Promise<PageElement[]> {
//     await this.waitForVisible();
//     const elements: PageElement[] = [];
//     const locators = this.locator.locator('css=' + cssLocator);
//
//     for (const li of await locators.all()) {
//       elements.push(this.buildPageElement(li));
//     }
//
//     return elements;
//   }
//
//   public async openNewWindow(): Promise<BasePage> {
//     const popupPromise = this.page.getRawPage().waitForEvent('popup');
//     await this.locator.click();
//     const popup = await popupPromise;
//
//     return new BasePage(popup);
//   }
//
//   public async scrollIntoView(): Promise<PageElement> {
//     await this.locator.scrollIntoViewIfNeeded();
//
//     return this;
//   }
//
//   public async waitForHidden(timeout = 10000) {
//     await this.locator.waitFor({ state: 'hidden', timeout: timeout });
//   }
//
//   public async isChecked() {
//     return await this.locator.isChecked();
//   }
//
//   public async getValue() {
//     return await this.getAttribute('value');
//   }
//
//   public async getParent(): Promise<PageElement> {
//     return this.buildPageElement(this.locator.locator('xpath=..').first());
//   }
//
//   public async assertTextEquals(expectedText: string, message?: string) {
//     await expect(this.locator, message).toHaveText(expectedText);
//   }
//
//   public async assertContainText(expectedText: string, message?: string) {
//     await expect(this.locator, message).toContainText(expectedText);
//   }
//
//   public async assertIsVisible(isVisible?: boolean, message?: string) {
//     await expect(this.locator, message).toBeVisible({ visible: isVisible });
//   }
//
//   public async assertIsChecked(isChecked?: boolean, message?: string) {
//     await expect(this.locator, message).toBeChecked({ checked: isChecked });
//   }
//
//   public getRawElement(): Locator {
//     return this.locator;
//   }
//
//   public async getElementByRole(role: RoleType, options?: ElementOptions): Promise<PageElement> {
//     return this.buildPageElement(this.locator.getByRole(role, options));
//   }
//
//   private buildPageElement(locator: Locator) {
//     const pageLocator = new PageLocator();
//     pageLocator.locator = locator;
//     pageLocator.page = this.page;
//
//     return new PageElement(pageLocator);
//   }
//
//   public async isDisabled() {
//     const isDisabled = await this.locator.getAttribute('disabled');
//     if (isDisabled !== null) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//
//   /**
//    * Retrieve a computed style for an element.
//    *
//    * @function getStyle
//    * @param property {string} The CSS property for the style to retrieve
//    * @returns Promise<string> The style value
//    */
//   public async getStyle(property: string): Promise<string> {
//     return this.locator.evaluate((el, property) => window.getComputedStyle(el).getPropertyValue(property), property);
//   }
//
//   /**
//    * Retrieve the background color of an element.
//    * @function getBackgroundColor
//    * @returns Promise<string> The background color
//    * @example
//    * const element = await page.getElementByCss('body');
//    * const backgroundColor = await element.getColor();
//    * console.log(backgroundColor); // rgba(0, 0, 0, 0)
//    */
//   public async getColor() {
//     return await this.getStyle('color');
//   }
//   public async getBoundingBox() {
//     return await this.locator.boundingBox();
//   }
//
//   public async getOffsetTop() {
//     const offsetTop = await this.locator.evaluate((el: HTMLElement) => el.offsetTop);
//
//     return offsetTop;
//   }
//
//   public async getOffsetLeft() {
//     const offsetLeft = await this.locator.evaluate((el: HTMLElement) => el.offsetLeft);
//
//     return offsetLeft;
//   }
//
//   public async getOffsetWidth() {
//     const offsetWidth = await this.locator.evaluate((el: HTMLElement) => el.offsetWidth);
//
//     return offsetWidth;
//   }
//
//   public async getOffsetHeight() {
//     const offsetHeight = await this.locator.evaluate((el: HTMLElement) => el.offsetHeight);
//
//     return offsetHeight;
//   }
//
//   public async getOffsetDimension() {
//     const offsetWidthDimension = await this.getOffsetWidth();
//     const offsetHeightDimension = await this.getOffsetHeight();
//
//     return {
//       offsetWidthDimension,
//       offsetHeightDimension,
//     };
//   }
//
//   /**
//    * Used to select the drop down element using text.
//    * @param value drop down option
//    * 'value
//    */
//   public async selectDropDownOptionByText(value: string) {
//     await this.locator.selectOption(value);
//   }
//
//   public async getElementByLabel(labelName: string): Promise<PageElement> {
//     return this.buildPageElement(this.locator.getByLabel(labelName));
//   }
//
//   public async getVisibleElementAtIndex(index: number) {
//     return this.buildPageElement(this.locator.nth(index).first());
//   }
//
//   public async filter(filter: FilterOptions) {
//     return this.buildPageElement(this.locator.filter(filter));
//   }
//
//   /**
//    * Retrieves the text content of the element using JavaScript execution in the browser context.
//    * @returns {Promise<string>} A Promise that resolves to the trimmed text content of the element.
//    *
//    * @example
//    * const element = await page.getElementByCss('.example-class');
//    * const text = await element.getTextByJs();
//    * console.log(text); // 'Example Text'
//    */
//   public async getTextByJs(): Promise<string> {
//     const textContent = await this.locator.evaluate((el) => el.textContent);
//
//     return textContent ? textContent.trim() : '';
//   }
//
//   /**
//    * Retrieves a PageElement using a test attribute ID.
//    *
//    * @param {string} testAttributeName - The test attribute ID to set.
//    * @param {string} locator - The locator to find the element by test attribute.
//    * @returns {PageElement} The PageElement corresponding to the located element.
//    */
//   public getElementByTestAttributeId(testAttributeName: string, locator: string): PageElement {
//     selectors.setTestIdAttribute(testAttributeName);
//
//     return this.buildPageElement(this.locator.getByTestId(locator).first());
//   }
//
//   public getByDaId(locator: string): PageElement {
//     return this.getElementByTestAttributeId('da-id', locator);
//   }
//   /**
//    * Checks if the element targeted by the locator is present on the page.
//    *
//    * @async
//    * @function isPresent
//    * @memberof PageElement
//    * @instance
//    *
//    * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the element is present (true) or not (false).
//    *
//    */
//   isPresent = async (): Promise<boolean> => {
//     const count = await this.locator.count();
//
//     return count > 0;
//   };
//
//   /**
//    * Checks if the element targeted by the locator has the class 'active'.
//    *
//    * @async
//    * @function isActive
//    * @memberof PageElement
//    * @instance
//    *
//    * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the element has the class 'active' (true) or not (false).
//    *
//    */
//   isActive = async (): Promise<boolean> =>
//     await this.locator.evaluate((element) => element.classList.contains('active'));
// }
