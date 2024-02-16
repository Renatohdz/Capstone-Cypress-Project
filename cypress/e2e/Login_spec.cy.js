import loginPage from '../../support/pages/LoginPage'

describe('Login Page', () => {
  
  beforeEach (() => {
    //delete all cookies before each run
    cy.clearAllCookies() 

    //Visit the login page   
    cy.visit('/') //Open the page

  })

//it.only para ejecutar un test 
//it.skip saltar test
  it('log in successfully', () => {

    cy.visit('/') //Open the page

  //Add Credentials username and password
    loginPage.nameLabel().type('standard_user')
    loginPage.passwordLabel().type('secret_sauce')
    //cy.get('[id="password"]').type('secret_sauce')

    //Click button Login
    loginPage.bNext().click() //Click in Login 

    //cy.get('[id="login-button"]').click() // click in login

    //Verify that the user  is logged in correctly
    //cy.url().should('include'. '/inventory.html' )

    })

    //test siguente

})
