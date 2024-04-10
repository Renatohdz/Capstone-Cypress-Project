import LoginPage from "../support/pages/LoginPage"; 
import inventoryPage from "../support/pages/inventoryPage";

describe('Login test', ()=> {

    beforeEach (() => {
        //delete all cookies
        cy.clearAllCookies()

        //visit the login page
        cy.visit('/')

        
    })


    it('Login successful', () => {
       
        LoginPage.loginUser('standard_user', 'secret_sauce')

        inventoryPage.elements.titleSpam().should('have.text','Products')

        //Validacion login exitoso
      cy.url().should('include','/inventory.html')
    })
})
