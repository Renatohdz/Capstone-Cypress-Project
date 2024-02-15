
describe('Login Page', () => {
  it('log in successfully', () => {

    //Visit the login page
    cy.visit('/') //Open the page
   
    //cy.url().should("contain","inventory.html")

  //Add Credentials username and password
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')

    //Click button Login
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click() // click in login

    //Verify that the user  is logged in correctly
   // cy.url().should('include'. '/inventory.html' )

    })
})