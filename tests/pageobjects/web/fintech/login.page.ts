import { WebBasePage } from '../../../../core/lib/web-base-page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends WebBasePage{

    private readonly userNameLocator = "#username";
    private readonly passwordLocator = '#password';
    private readonly submitBtnLocator = 'button[type="submit"]';

    public  getUserName () {
       return this.findElement(this.userNameLocator)
    }

 public getPassword(){
       return  this.findElement(this.passwordLocator);
 }

    public  getSubmitBtn () {
        return this.findElement(this.submitBtnLocator);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
      await this.getUserName().setValue(username);
      await this.getPassword().setValue(password);
      await this.getSubmitBtn().click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
       await this.navigate('https://the-internet.herokuapp.com/login');
    }
}

export default LoginPage;
