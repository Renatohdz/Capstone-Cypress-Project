import LoginPage from "../support/pages/LoginPage";
import inventoryPage from "../support/pages/inventoryPage";
import yourCart from "../support/pages/yourCart";

describe('Inventory test',() => {

    beforeEach (()=> {
        cy.clearAllCookies() //delete all cookies
        cy.visit('/') //visit the login page

        LoginPage.loginUser('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpam().should('have.text','Products')
        cy.url().should('include','/inventory.html')//Validacion login exitoso

    })

})