import loginPage from "../support/pages/LoginPage"

describe('Login Page', () => {
  
  beforeEach (() => {
    //delete all cookies before each run
    cy.clearAllCookies() 

    //Visit the login page   
    cy.visit('/') //Open the page

  })

 //it.only para ejecutar un test 
 //it.skip saltar test

  it('log in successfully', () => {

  //Add Credentials username and password
    loginPage.elements.nameLabel().type('standard_user')
    loginPage.elements.passwordLabel().type('secret_sauce')
    

    //Click button Login
   loginPage.elements.bNext().click()

   //Validacion login exitoso
      cy.url().should('include','/inventory.html')

    })

 //test  Order Product
    it ('Login Order Product',()=>{

        //Add Credentials username and password
          loginPage.elements.nameLabel().type('standard_user')
          loginPage.elements.passwordLabel().type('secret_sauce')
          
      
        //Click button Login
          loginPage.elements.bNext().click()
    
         //Valida que el usuario inicio correctamente   
          cy.url().should('include', '/inventory.html') 
            
        })
    
        it('Product Low to High',()=> {
    
            //Add Credentials username and password
          loginPage.elements.nameLabel().type('standard_user')
          loginPage.elements.passwordLabel().type('secret_sauce')
          
      
        //Click button Login
          loginPage.elements.bNext().click()
    
          //Valida que el usuario inicio correctamente   
          cy.url().should('include', '/inventory.html') 
    
        //Order products
          loginPage.elements.containe().select('Price (low to high)')
    
         //Valida que los productos si se hicieron de menor a mayor   
            cy.get('[class="inventory_container"]')
                .then(($prices)=>{
                   const prices = $prices.map((index, el) => parseFloat(el.innerText.replace('$',''))).toArray()
                   const sortedPrices = [...prices].sort((a, b) => a - b)
                   expect(prices).to.deep.equal(sortedPrices)  
    
                })    
    
    
        })

  //test Multi Item
  it ('login Multi Item',()=>{

    //Add Credentials username and password
       loginPage.elements.nameLabel().type('standard_user')
       loginPage.elements.passwordLabel().type('secret_sauce')
   
    //Click button Login
       loginPage.elements.bNext().click()
    
   //Valida que el usuario inicio correctamente   
       cy.url().should('include', '/inventory.html')  
   
     })
   
   it ('Multi item',()=>{
   
   //Add Credentials username and password
       loginPage.elements.nameLabel().type('standard_user')
       loginPage.elements.passwordLabel().type('secret_sauce')
   
   //Click button Login
       loginPage.elements.bNext().click()
   
   // Add products to cart
       cy.get('.inventory_list > .inventory_item:nth-child(1) .btn_inventory').click()
   
   // Verificar que el artículo se agregó al carrito
       cy.get('.shopping_cart_badge').should('contain', '1')
   
       cy.get('.inventory_list > .inventory_item:nth-child(2) .btn_inventory').click()
   
   // Verificar que el artículo se agregó al carrito
       cy.get('.shopping_cart_badge').should('contain', '2')
   
       cy.get('.inventory_list > .inventory_item:nth-child(3) .btn_inventory').click()
   
   // Verificar que el artículo se agregó al carrito
       cy.get('.shopping_cart_badge').should('contain', '3')
   
   
      })

   //test     

   it ('Login Add sauce labs',()=>{

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


  // Test Complete Purchase
  
  it ('Complete Purchase',()=>{

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
  
   // Test Login Fail
   it('Login with an invalid user', () => {
    
    //Visit the login page 
    cy.visit('/') //Open the page

    //Add Credentials username and password
    cy.get('[id="user-name"]').type('locked_out_user')
    cy.get('[id="password"]').type('secret_sauce')

    //valida que te quedas en la misma pagina 
    cy.url().should('include','/')
    

  })

  //Test Logout

  it('Logout page', () => {

    //Add Credentials username and password
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')

    //Click button Login
    cy.get('[id="login-button"]').click() // click in login

    //Validacion login exitoso
    cy.url().should('include','/inventory.html')

   //click on the burger menu
   cy.get('[id="react-burger-menu-btn"]').click()

   //click on the logout link
   cy.get('[id="logout_sidebar_link"]').click()

  //validate the logout session
      cy.url().should('include','/')


  })

  

})

