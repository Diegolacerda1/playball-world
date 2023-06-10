class loginPage {
  get descriptionEmail() {return cy.get(":nth-child(2) > .CommonInput_input__1a_v4");}
  get descriptionPassword() {return cy.get(":nth-child(3) > .CommonInput_input__1a_v4");}
  get buttonToComeIn() {return cy.get(".SubmitButton_button__JpaGS");}
  get buttonExit() {return cy.get(".Navbar_navbar__logoutLabel__bo_wD");}
  get buttonLogOut() {return cy.get(".errorButton");}

  typeUserInfo(email, password) {
    this.descriptionEmail.type(email);
    this.descriptionPassword.type(password);
  }

  clickButtonToComeIn() {
    this.buttonToComeIn.click();
  }

  clickButtonExit() {
    this.buttonExit.click();
  }

  clickButtonLogOut() {
    this.buttonLogOut.click();
  }
}

export default new loginPage();
