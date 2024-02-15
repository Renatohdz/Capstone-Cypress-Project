describe('Login Page Swag Labs', () => {
  it('passes', () => {
    //Visit the login page
    cy.visit('https://www.saucedemo.com/')

  //Add Credentials
    cy.get('input[placeholder="Username"]').type(standard_user);
    cy.get('input[placeholder="Password"]').type(secret_sauce);

    //Click button Login
    cy.get('[class="submit-button btn_action"]').click();

  })
})