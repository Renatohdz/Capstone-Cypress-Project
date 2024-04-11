import loginPage from "../support/pages/LoginPage"
import inventoryPage from "../support/pages/inventoryPage"
import yourCart from "../support/pages/yourCart"


describe('add sauce labs',()=>{

    beforeEach(()=>{
        //delete all cookies before each run
            cy.clearAllCookies() 
        
        //Visit the login page   
            cy.visit('/') //Open the page   
        
        })

     it ('login',()=>{

            //Add Credentials username and password
                loginPage.elements.nameLabel().type('standard_user')
                loginPage.elements.passwordLabel().type('secret_sauce')
            
             //Click button Login
                loginPage.elements.bNext().click()
             
            //Valida que el usuario inicio correctamente   
                cy.url().should('include', '/inventory.html')  

        // Encuentra el artículo "Sauce Labs Onesie" y haz clic en el botón "Add to Cart"

            //cy.contains('.inventory_item_name', 'Sauce Labs Onesie')
            inventoryPage.elements.invItem
            inventoryPage.elements.addSaucebox().click() 
            yourCart.elements.iconCart().click()
            yourCart.elements.spamCart().should('have.text','Your Cart') // Verifica que estes en la pagina correcta 
            yourCart.elements.circCart().should('have.text','1') // Verifica que el artículo se ha agregado al carrito correctamente

           
    
              })    

})
