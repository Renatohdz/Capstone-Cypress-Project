import loginPage from "../support/pages/LoginPage"

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

            cy.contains('.inventory_item_name', 'Sauce Labs Onesie')
            cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()
            cy.get('[class="shopping_cart_link"]').click()

        //Valida que te muestre la url del carro
            cy.url().should('include', '/cart.html')
        
        // Verifica que el artículo se ha agregado al carrito correctamente
            cy.get('.shopping_cart_badge').should('have.text', '1')  
    
              })    

})
