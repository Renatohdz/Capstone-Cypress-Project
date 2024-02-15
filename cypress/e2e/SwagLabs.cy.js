describe('Login Page Swag Labs', () => {
  it('should log in successfully', () => {
    //Visit the login page
    cy.visit('https://www.saucedemo.com/');

  //Add Credentials
    cy.get('input[data-test="username"]').type('standard_user');
    cy.get('input[data-test="password"]').type('secret_sauce');

    //Click button Login
    cy.get('[class="submit-button btn_action"]').click();

  })
})