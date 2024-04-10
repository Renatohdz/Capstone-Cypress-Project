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
        LoginPage.typeUsername('standard_user')
        LoginPage.typePassword('secret_sauce')
        LoginPage.clickLogin()

        inventoryPage.elements.titleSpam().should('have.text','Products')

        //Validacion login exitoso
      cy.url().should('include','/inventory.html')
    })
})
