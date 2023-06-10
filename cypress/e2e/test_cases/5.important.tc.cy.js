import loginPage from "../../fixtures/page_objects/login.page";
import dashboardPage from "../../fixtures/page_objects/dashboard.page";

describe("5 most important Test Cases", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should log in with existing credentials - PDL12DL-61", () => {
    //Add valid credentials to "email" and "password"
    loginPage.typeUserInfo("point@gmail.com", "12345678");

    //Click on "to come in" button
    loginPage.clickButtonToComeIn();
  });

  it("Should not log in with invalid credentials - PDL12DL-62", () => {
    //Add invalid credentials to "email" and "password"
    loginPage.typeUserInfo("wrongemailgmail.com", "12345678");

    //Click on "to come in" button
    loginPage.clickButtonToComeIn();
  });

  it("Should log out - PDL12DL-64", () => {
    //Add valid credentials to "email" and "password"
    loginPage.typeUserInfo("point@gmail.com", "12345678");

    //Click on "to come in" button
    loginPage.clickButtonToComeIn();

    //click on "Exit" button on down left corner of screen
    loginPage.clickButtonExit();

    //click "log out" button on pop up window
    loginPage.clickButtonLogOut();
  });

  it("Should be able to filter users by first name - PDL12DL-68", () => {
    //Add valid credentials to "email" and "password"
    loginPage.typeUserInfo("point@gmail.com", "12345678");

    //Click on "to come in" button
    loginPage.clickButtonToComeIn();

    //click on "Users" on navigation bar on the left of screen
    dashboardPage.clickButtonUsers.click();

    //type a existing user's name
    dashboardPage.typeKeywordSearchField("david");
  });

  it("Should be able to check user's profile - PDL12DL-70", () => {
    //Add valid credentials to "email" and "password"
    loginPage.typeUserInfo("point@gmail.com", "12345678");

    //Click on "to come in" button
    loginPage.clickButtonToComeIn();

    //click on "Users" on navigation bar on the left of screen
    dashboardPage.clickButtonUsers.click();

    //click on first user of the user's list
    dashboardPage.clickOnFirstUserInList();

    //click on "view profile" button in popup window
    dashboardPage.clickButtonViewProfile();
  });
});
