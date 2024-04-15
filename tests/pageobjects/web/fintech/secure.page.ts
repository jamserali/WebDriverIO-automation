import { $ } from '@wdio/globals'
import { WebBasePage } from '../../../../core/lib/web-base-page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends WebBasePage {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
