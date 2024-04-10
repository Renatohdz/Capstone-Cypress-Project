import LoginPage from "../support/pages/LoginPage"; 
import inventoryPage from "../support/pages/inventoryPage";

describe('Login test', ()=> {

    beforeEach (() => {
        cy.clearAllCookies() //delete all cookies
        cy.visit('/') //visit the login page

    })

    it('Login successful', () => {
       
        LoginPage.loginUser('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpam().should('have.text','Products')
        cy.url().should('include','/inventory.html')//Validacion login exitoso
    })

    it('Login Out',() => {
        LoginPage.loginUser('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpam().should('have.text','Products')
        cy.url().should('include','/inventory.html')//Validacion login exitoso

        inventoryPage.logout() //Logout 
        cy.url().should('include','/')//Valida que sea exitoso

    })

    it('Error login',() => {
        LoginPage.errorMsg('standard_user', 'error_pass')//Validacion de Error Login
        
    })

})
