

class yourCart {
    elements = {
    iconCart: () =>  cy.get('[class="shopping_cart_link"]'),    
    spamCart: () =>  cy.get('[class="title"]'),
    circCart: () =>  cy.get('[class="shopping_cart_badge"]'),

    }



}



export default new yourCart()