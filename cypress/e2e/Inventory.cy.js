import LoginPage from "../support/pages/LoginPage"; 
import inventoryPage from "../support/pages/inventoryPage";


describe('Login test', ()=> {



    beforeEach (() => {
        cy.clearAllCookies() //delete all cookies
        cy.visit('/') //visit the login page

    })

    it('Add to Multi items to Cart', () => {
       
        LoginPage.loginUser('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpam().should('have.text','Products')
        cy.url().should('include','/inventory.html')//Validacion login exitoso

        inventoryPage.addToCart(0) // Agrega el primer artículo
        inventoryPage.addToCart(1) // Agrega el segundo artículo
        inventoryPage.addToCart(2) // Agrega el segundo artículo
        inventoryPage.goToCart() // Ir al carrito de compras    
    
        cy.url().should('include', '/cart.html')
        inventoryPage.elements.ssCart().should('have.text', '3')


    })

})