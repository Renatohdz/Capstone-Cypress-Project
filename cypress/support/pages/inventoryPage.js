

class inventoryPage {
    elements = {
    //Form Selector
    titleSpam: () =>    cy.get('[class="title"]'),
    invItem: () =>      cy.contains('.inventory_item_name', 'Sauce Labs Onesie'),
    addSaucebox: () =>  cy.get('[id="add-to-cart-sauce-labs-onesie"]'),
    burMenu: () =>      cy.get('[id="react-burger-menu-btn"]'),
    outLink: () =>      cy.get('[id="logout_sidebar_link"]'),  
    itProd: () =>       cy.get('.inventory_item'),
    itBtn: () =>        cy.get('.btn_inventory'),
    sCart: () =>        cy.get('.shopping_cart_link'),
    ssCart: () =>       cy.get('.shopping_cart_badge'),    

    

    }

    logout(){
     this.elements.burMenu().click()
     this.elements.outLink().click()

    }

     addToCart(index) {
       cy.get('.inventory_item').eq(index).find('.btn_inventory').click()
       //this.elements.itProd().eq(index).find().this.elements.itBtn().click()
    }

     goToCart() {
       cy.get('.shopping_cart_link').click()
     
    }
    
     addToCartSauce(){
       this.elements.invItem()
       this.elements.addSaucebox().click()    

    }
    

}

export default new inventoryPage()