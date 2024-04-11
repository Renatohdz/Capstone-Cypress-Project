

class yourCart {
    elements = {
    iconCart: () =>      cy.get('[class="shopping_cart_link"]'),    
    spamCart: () =>      cy.get('[class="title"]'),
    circCart: () =>      cy.get('[class="shopping_cart_badge"]'),
    checkOut: () =>      cy.get('[id="checkout"]'),
    dFirstName: () =>    cy.get('[id="first-name"]'),
    dLastName: () =>     cy.get('[id="last-name"]'),
    dPostalCode: () =>   cy.get('[id="postal-code"]'),
    btnNextP: () =>      cy.get('[id="continue"]'),    
    finishPurchase: ()=> cy.get('[id="finish"]'),    
    yourOrder: () =>     cy.get('[class="complete-header"]'),
    backHomeBtn: () =>  cy.get('[id="back-to-products"]'),

    }

    addYourCart() {
        this.elements.iconCart().click()

    }

    checkOutPurchase() {

        this.elements.checkOut().click()

        //valida que te muestre la pagina de checkout
            cy.url().should('include','/checkout-step-one.html')
            
         //Captura la informacion
            this.elements.dFirstName().type('dummy')
            this.elements.dLastName().type('test')
            this.elements.dPostalCode().type('78040')
            this.elements.btnNextP().click()

        //verifica que se muestre la url 
            cy.url().should('include','/checkout-step-two.html')

        //Click en el boton de Finish    
            this.elements.finishPurchase().click()

        //Validaciones de compra exitosa
            cy.url().should('include','/checkout-complete.html')
            this.elements.yourOrder().should('have.text','Thank you for your order!')
            this.elements.backHomeBtn().click()

    }


}



export default new yourCart()