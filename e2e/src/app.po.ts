import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getNameInputOfUser(n: number): ElementFinder {
    return element(by.css(`#user${n}`));
  }

  getSubmitUserNamesButton(): ElementFinder {
    return element(by.css('button'));
  }

  getUserNameErrorOfUser(n: number): ElementFinder {
    return element(by.css(`#user${n} + .error`));
  }

  getSameUserNameError(): ElementFinder {
    return element(by.css('#user2 ~ .error:nth-of-type(2)'));
  }
}
