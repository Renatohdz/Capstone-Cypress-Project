import LoginPage from "../support/pages/LoginPage"; 
import inventoryPage from "../support/pages/inventoryPage";
import yourCart from "../support/pages/yourCart";

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

     it('Add Sauce Labs Onesie item to cart', () => {

        LoginPage.loginUser('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpam().should('have.text','Products')
        cy.url().should('include','/inventory.html')//Validacion login exitoso

        //cy.contains('.inventory_item_name', 'Sauce Labs Onesie')
        inventoryPage.addToCartSauce()
        yourCart.addYourCart()
        yourCart.elements.spamCart().should('have.text','Your Cart') // Verifica que estes en la pagina correcta 
        yourCart.elements.circCart().should('have.text','1') // Verifica que el artículo se ha agregado al carrito correctamente
        
       })

     it('Order Item Low-high price',() => {
        
         LoginPage.loginUser('standard_user', 'secret_sauce')
         inventoryPage.elements.titleSpam().should('have.text','Products')
         cy.url().should('include','/inventory.html')//Validacion login exitoso 

         inventoryPage.sortByPriceLowToHigh('lohi')// Ordenar productos por precio menor a mayor
         inventoryPage.validateByPriceLowToHigh() //Valida que los productos si se hicieron de menor a mayor  

        })

})