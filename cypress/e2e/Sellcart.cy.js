import LoginPage from "../support/pages/LoginPage";
import inventoryPage from "../support/pages/inventoryPage";
import yourCart from "../support/pages/yourCart";

describe('Complete purchase', ()=> {

    beforeEach(()=>{
        //delete all cookies before each run
            cy.clearAllCookies() 
        
        //Visit the login page   
            cy.visit('/') //Open the page   
        
        })

     it ('Add to cart and purchase 1 Item',() => {

        LoginPage.loginUser('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpam().should('have.text','Products')
        cy.url().should('include','/inventory.html')//Validacion login exitoso

        //cy.contains('.inventory_item_name', 'Sauce Labs Onesie')
        inventoryPage.addToCartSauce()
        yourCart.addYourCart()
        yourCart.elements.spamCart().should('have.text','Your Cart') // Verifica que estes en la pagina correcta 
        yourCart.elements.circCart().should('have.text','1') // Verifica que el artículo se ha agregado al carrito correctamente
        yourCart.checkOutPurchase()//completa la compra con log out


     })

        


})