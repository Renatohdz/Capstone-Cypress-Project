import loginPage from "../support/pages/LoginPage"

describe ('Multi items in cart', () => {

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


})
