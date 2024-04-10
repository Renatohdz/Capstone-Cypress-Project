import loginPage from "../../support/pages/LoginPage"

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

  //Add Credentials username and password
    loginPage.elements.nameLabel().type('standard_user')
    loginPage.elements.passwordLabel().type('secret_sauce')
    

    //Click button Login
   loginPage.elements.bNext().click()

   //Validacion login exitoso
      cy.url().should('include','/inventory.html')

    })

    //test siguente

})
