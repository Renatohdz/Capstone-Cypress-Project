describe('Login Page Swag Labs', () => {
  it('passes', () => {
    //Visit the login page
    cy.visit('https://www.saucedemo.com/')

  //Add Credentials
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');

    //Click button Login
    cy.get('[class="submit-button btn_action"]').click();

  })
})