import loginPage from "../support/pages/LoginPage"

describe ('Order Product',() => {

    beforeEach(()=>{
    //delete all cookies before each run
        cy.clearAllCookies() 

    //Visit the login page   
        cy.visit('/') //Open the page

    })

    it ('Product',()=>{

    //Add Credentials username and password
      loginPage.elements.nameLabel().type('standard_user')
      loginPage.elements.passwordLabel().type('secret_sauce')
      
  
    //Click button Login
      loginPage.elements.bNext().click()

     //Valida que el usuario inicio correctamente   
      cy.url().should('include', '/inventory.html') 
        
    })

    it('Product ASC to DESC',()=> {

        //Add Credentials username and password
      loginPage.elements.nameLabel().type('standard_user')
      loginPage.elements.passwordLabel().type('secret_sauce')
      
  
    //Click button Login
      loginPage.elements.bNext().click()

    //Order products
      loginPage.elements.containe().select('Price (low to high)')




    })
}) 