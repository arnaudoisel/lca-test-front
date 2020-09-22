import { AppPage } from './app.po';
import { browser, Key, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display error message if first user name is empty', () => {
    page.navigateTo();

    typeUsersNames('B', 'Alice');
    typeUsersNames(Key.BACK_SPACE, '');

    expect(page.getUserNameErrorOfUser(1).getText()).toBe("First user name is required");
  });

  it('should display error message if second user name is empty', () => {
    page.navigateTo();

    typeUsersNames('Bob', 'A');
    typeUsersNames('', Key.BACK_SPACE);

    expect(page.getUserNameErrorOfUser(2).getText()).toBe("Second user name is required");
  });

  it('should display error message if users names are blank', () => {
    page.navigateTo();

    typeUsersNames('   ', '   ');

    expect(page.getUserNameErrorOfUser(1).getText()).toBe("First user name is required");
    expect(page.getUserNameErrorOfUser(2).getText()).toBe("Second user name is required");
  });

  it('should display error message if users names are the same ', () => {
    page.navigateTo();

    typeUsersNames('Bob', 'Bob');

    expect(page.getSameUserNameError().getText()).toBe("Users names must be different");
  });

  it('should be able to enter user names', () => {
    page.navigateTo();

    typeAndSubmitUsersNames('Bob', 'Alice');
  });

  it('should be able to chat', () => {
    page.navigateTo();

    const message1 = 'Hello Alice !';
    const message2 = 'Hello Bob !'

    typeAndSubmitUsersNames('Bob', 'Alice');
    typeAndSubmitMessageFromUser(message1, 1);
    typeAndSubmitMessageFromUser(message2, 2);

    const chatHistoryOfUser1 = page.getChatHistoryOfUser(1).getText();
    expect(chatHistoryOfUser1).toContain(message1);
    expect(chatHistoryOfUser1).toContain(message2);

    const chatHistoryOfUser2 = page.getChatHistoryOfUser(1).getText();
    expect(chatHistoryOfUser2).toContain(message1);
    expect(chatHistoryOfUser2).toContain(message2);
  });

  it('same user should be able to send multiple messages in a row', () => {
    page.navigateTo();

    const messages = [
      'Hello Alice !',
      'How are you ?',
      'Everything fine ?'
    ];

    typeAndSubmitUsersNames('Bob', 'Alice');
    messages.forEach(message => typeAndSubmitMessageFromUser(message, 1))

    const chatHistoryOfUser1 = page.getChatHistoryOfUser(1).getText();
    messages.forEach(message => expect(chatHistoryOfUser1).toContain(message))

    const chatHistoryOfUser2 = page.getChatHistoryOfUser(2).getText();
    messages.forEach(message => expect(chatHistoryOfUser2).toContain(message))
  });

  const typeUsersNames = (user1: string, user2: string) => {
    const user1NameInput = page.getNameInputOfUser(1);
    user1NameInput.sendKeys(user1);

    const user2NameInput = page.getNameInputOfUser(2);
    user2NameInput.sendKeys(user2);
  }

  const submitUsersNames = () => {
    const submitUsersNamesButton = page.getSubmitUserNamesButton();
    submitUsersNamesButton.click();
  }

  const typeAndSubmitUsersNames = (user1: string, user2: string) => {
    typeUsersNames(user1, user2);
    submitUsersNames();
  }

  const typeMessageFromUser = (message: string, user: number) => {
    const chat1Input = page.getChatInputOfUser(user);
    chat1Input.sendKeys(message);
  }

  const submitMessageFromUser = (user: number) => {
    const chat1SendButton = page.getChatSendButtonOfUser(user);
    chat1SendButton.click();
  }

  const typeAndSubmitMessageFromUser = (message: string, user: number) => {
    typeMessageFromUser(message, user);
    submitMessageFromUser(user);
  }
});
