import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

  it('should have a title', async () => {
    let subject = await browser.getTitle();
    let result  = 'Angular Starter by @gdi2290 from @TipeIO';
    expect(subject).toEqual(result);
  });

  it('should test login', async () => {
    await browser.sleep(2000);
    let locpresent = browser.wait(function() {
        return element(by.css("#location")).isPresent()
    });
    if(locpresent){
        element(by.css("#location")).$('[value="5a5467e6b305fe2b2c54a353"]').click();
    }

    let userPresent = browser.wait(function() {
        return element(by.css("#user")).isPresent()
    });
    if(userPresent){
        element(by.css("#user")).$('[value="5a4b48e9cb961b0b7447fb23"]').click();
    }

    await browser.sleep(2000);
    let buttonPresent = browser.wait(function() {
        return element(by.css("button")).isPresent()
    });
    if(buttonPresent){
        element(by.css("button")).click();
    }
    await browser.sleep(2000);

    element(by.css("#search")).sendKeys('italia');

    await browser.sleep(2000);

  });

});
