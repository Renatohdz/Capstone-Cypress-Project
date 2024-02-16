
describe('Login Page', () => {
  it('log in successfully', () => {

    //Visit the login page
    cy.visit('/') //Open the page
   
    //cy.url().should("contain","inventory.html")

  //Add Credentials username and password
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')

    //Click button Login
    cy.get('[id="login-button"]').click() // click in login

    //Verify that the user  is logged in correctly
   // cy.url().should('include'. '/inventory.html' )

    })
})
