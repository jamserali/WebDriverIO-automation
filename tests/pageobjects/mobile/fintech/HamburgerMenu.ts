import { MobileBasePage } from '../../../../core/lib/mobile-base-page.ts';
export class HamburgerMenu extends MobileBasePage{
  private readonly btnHamburgerIcon = "~hamburgerIcon";
  private readonly btnLoginOrSignup = "~loginSignUpBtn";
  private readonly btnMyEnquiries = "~enquiriesTab";
  private readonly btnMyShortlist = "~shortlistTab";
  private readonly btnMySavedSearches = "~savedSearchTab";
  private readonly btnMyHiddenProperties = "~hiddenPropTab";
  private readonly btnResidentialProperties = "~residentialTab";
  private readonly btnCommercialProperties = "~commercialTab";
  private readonly btnNewLaunches = "~newLaunchTab";
  private readonly btnMortgages = "~homeFinanceTab";
  private readonly btnFindAgent = "~findAgentTab";
  private readonly btnHelpAndSupport = "~helpTab";
  private readonly btnLogout = "~logoutTab";
  private readonly btnSettings = "~settingsTab";
  private readonly pageHeader = "~pageHeader";
  private readonly txtViewProfile = "~viewProfileButton";
  private readonly btnLogoutConfirm = "~logoutBtn";
  private readonly btnHomeLogo = "~logo";
  private readonly txtShortlistCount = "~shortlistedCount";

  public async clickHamburgerIcon(){
   await this.click(this.btnHamburgerIcon);
  }

  public async clickLoginOrSignup(){
   await $(this.btnLoginOrSignup).click();
  }

  public async clickMortgages(){
    await this.click(this.btnMortgages);
  }


}