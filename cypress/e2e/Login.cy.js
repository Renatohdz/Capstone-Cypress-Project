describe('Login Page Swag Labs', () => {
  it('should log in successfully', () => {

    const username = 'standard_user';
    const password = 'secret_sauce';
    //Visit the login page
    cy.visit('https://www.saucedemo.com/');

  //Add Credentials
    cy.get('input[data-test="username"]').type('username');
    cy.get('input[data-test="password"]').type('password');

    //Click button Login
    cy.get('[class="submit-button btn_action"]').click();

  })
})