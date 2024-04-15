export class TestConfig {
  private name: string;
  private locale: string;
  private language: string;
  private commercialUrl: string;
  private adminUrl: string;
  private agentUrl: string;
  private agentTrialAccountUrl: string;
  private agentOfferingsUrl: string;
  private baseAddress: string;
  private phoneCode: string;
  private siteCode: string;
  private commercialSiteCode: string;
  private country: string;
  private countryCode: string;
  private regionLowerCase: string;

  /**
   * This method returns country as region in uppercase
   * SG - SG
   * MY - MY
   * DD - TH
   * DDE - TH
   *
   * @public
   * @returns {string}
   */
  public getCountry(): string {
    return this.country;
  }

  /**
   * This method returns country codes in uppercase
   * SG - SG
   * MY - MY
   * DD - DD
   * DDE - DDE
   *
   * @public
   * @returns {string}
   */
  public getCountryCode(): string {
    return this.countryCode;
  }

  public setCountryCode(testCountryCode: string) {
    this.countryCode = testCountryCode;
  }

  public setCountry(country: string): void {
    this.country = country;
  }

  /**
   * This method returns country as region in lowercase
   * SG - sg
   * MY - my
   * DD - th
   * DDE - th
   *
   * @public
   * @returns {string}
   */
  public getRegion(): string {
    return this.country.toLocaleLowerCase();
  }

  public setRegion(country: string): void {
    this.regionLowerCase = country.toLocaleLowerCase();
  }

  /**
   * This method returns country name in title case
   * SG - Singapore
   * MY - Malaysia
   * DD - Thailand
   * DDE - Thailand
   *
   * @public
   * @returns {string}
   */
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  /**
   * This method returns country name in lowercase
   * SG - singapore
   * MY - malaysia
   * DD - thailand
   * DDE - thailand
   *
   * @public
   * @returns {string}
   */
  public getLowerCaseCountryName(): string {
    return this.name.toLowerCase();
  }

  /**
   * This method returns locale based on Country
   * SG - en
   * MY - en
   * DD - th
   * DDE - en
   *
   * @public
   * @returns {string}
   */
  public getLocale(): string {
    return this.locale;
  }

  public setLocale(locale: string): void {
    this.locale = locale;
  }

  /**
   * This method returns language based on Country
   * SG - en
   * MY - en
   * DD - th
   * DDE - th
   *
   * @public
   * @returns {string}
   */
  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(language: string): void {
    this.language = language;
  }

  public getCommercialUrl(): string {
    return this.commercialUrl;
  }

  public setCommercialUrl(commercialUrl: string): void {
    this.commercialUrl = commercialUrl;
  }

  public getAdminUrl(): string {
    return this.adminUrl;
  }

  public setAdminUrl(adminUrl: string): void {
    this.adminUrl = adminUrl;
  }

  public getAgentUrl(): string {
    return this.agentUrl;
  }

  public setAgentUrl(agentUrl: string): void {
    this.agentUrl = agentUrl;
  }

  public getAgentTrialAccountUrl(): string {
    return this.agentTrialAccountUrl;
  }

  public setAgentTrialAccountUrl(agentTrialAccountUrl: string): void {
    this.agentTrialAccountUrl = agentTrialAccountUrl;
  }

  public getAgentOfferingsUrl(): string {
    return this.agentOfferingsUrl;
  }

  public setAgentOfferingsUrl(agentOfferingsUrl: string): void {
    this.agentOfferingsUrl = agentOfferingsUrl;
  }

  public getBaseAddress(): string {
    return this.baseAddress;
  }

  public setBaseAddress(baseAddress: string): void {
    this.baseAddress = baseAddress;
  }

  public getPhoneCode(): string {
    return this.phoneCode;
  }

  public setPhoneCode(phoneCode: string): void {
    this.phoneCode = phoneCode;
  }

  public getSiteCode(): string {
    return this.siteCode;
  }

  public setSiteCode(siteCode: string): void {
    this.siteCode = siteCode;
  }

  public getCommercialSiteCode(): string {
    return this.commercialSiteCode;
  }

  public setCommercialSiteCode(commercialSiteCode: string): void {
    this.commercialSiteCode = commercialSiteCode;
  }
}
