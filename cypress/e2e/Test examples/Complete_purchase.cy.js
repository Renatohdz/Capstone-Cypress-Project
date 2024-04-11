import loginPage from "../support/pages/LoginPage"

describe('complete purchase',()=>{

    beforeEach(()=>{
        //delete all cookies before each run
            cy.clearAllCookies() 
        
        //Visit the login page   
            cy.visit('/') //Open the page   
        
        })

     it ('login & add sauce labs item',()=>{

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

        //Click en el boton de continue
            cy.get('[id="checkout"]').click()

        //valida que te muestre la pagina de checkout
            cy.url().should('include','/checkout-step-one.html')
            
         //Captura la informacion
            cy.get('[id="first-name"]').type('dummy')
            cy.get('[id="last-name"]').type('test')
            cy.get('[id="postal-code"]').type('78040')
            cy.get('[id="continue"]').click()

        //verifica que se muestre la url 
            cy.url().should('include','/checkout-step-two.html')

        //Click en el boton de Finish    
            cy.get('[id="finish"]').click()

        //Validaciones de compra exitosa
            cy.url().should('include','/checkout-complete.html')
            cy.get('[class="complete-header"]').should('have.text','Thank you for your order!')
            cy.get('[id="back-to-products"]').click()

        //log out    
            //click on the burger menu
            cy.get('[id="react-burger-menu-btn"]').click()

        //click on the logout link
            cy.get('[id="logout_sidebar_link"]').click()

            
      })    

})
