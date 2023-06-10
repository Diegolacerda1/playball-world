import { faker } from "@faker-js/faker";
import loginPage from "../../../fixtures/page_objects/login.page.js";

describe("Should login with valid credentials", () => {
  beforeEach(() => {
    cy.visit("/");
    
  });

  it("Should log in with existing credentials", () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = `diego${faker.datatype.number()}@gmail.com`;
    const password = "password123";

    cy.createUser(firstName, lastName, email, password, 'true');
    cy.log(firstName, lastName)
    // Click login button on the homepage
    loginPage.navigateLoginPage();

    // Add valid credentials (e-mail and password)
    loginPage.typeUserInfo(email, password);

    // Click submit button to finish logging in
    loginPage.clickButtonSubmit();

    // Text "profile" should be visible on top left of screen
    loginPage.textDashboardProfile.should("be.visible");
  });
});
