class dashboardPage {
  get buttonUsersNavMenu() {
    return cy.get(
      '[href="/users?itemsPerPage=25&currentPage=1"] > .NavbarItem_item__DLG8p > .NavbarItem_item__label__FfqJ1'
    );
  }

  get searchInputField() {
    return cy.get(".CommonInput_input__1a_v4");
  }

  get firstUserInList() {
    return cy.get(".table__content > :nth-child(1) > :nth-child(2)");
  }
  
  get buttonViewProfile() {
    return cy.get('[href="/users/6483285b4d8eda7b5380ce83"]');
  }

  clickButtonUsers() {
    this.buttonUsersNavMenu.click();
  }

  typeKeywordSearchField(keyword) {
    this.searchInputField.type(keyword);
  }

  clickOnFirstUserInList() {
    this.firstUserInList.click();
  }

  clickButtonViewProfile() {
    this.buttonViewProfile.click();
  }
}

export default new dashboardPage();
