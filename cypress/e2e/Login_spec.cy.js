
describe('Login Page', () => {
  it('log in successfully', () => {

    //Visit the login page
    cy.visit('https://www.saucedemo.com/'); //Open the page

  //Add Credentials username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    //Click button Login
    cy.get('#login-button').click(); // click in login

    //Verify that the user  is logged in correctly
   // cy.url().should('include'. '/inventory.html' )

    })
})