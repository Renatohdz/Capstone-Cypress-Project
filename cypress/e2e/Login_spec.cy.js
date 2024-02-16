
describe('Login Page', () => {
  
  beforeEach (() => {
    //delete all cookies before each run
    cy.clearAllCookies() 

  })

  it('log in successfully', () => {

    //Visit the login page   
    cy.visit('/') //Open the page
   

  //Add Credentials username and password
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')

    //Click button Login
    cy.get('[id="login-button"]').click() // click in login

    //Verify that the user  is logged in correctly
    //cy.url().should('include'. '/inventory.html' )

    })
})
