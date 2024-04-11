

class yourCart {
    elements = {
    iconCart: () =>  cy.get('[class="shopping_cart_link"]'),    
    spamCart: () =>  cy.get('[class="title"]'),
    circCart: () =>  cy.get('[class="shopping_cart_badge"]'),
   
    
    }

    addYourCart() {
        this.elements.iconCart().click()

    }


}



export default new yourCart()