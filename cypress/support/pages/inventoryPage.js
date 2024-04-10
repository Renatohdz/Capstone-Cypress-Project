

class inventoryPage {
    elements = {
    //Form Selector
    titleSpam: () =>    cy.get('[class="title"]'),
    invItem: () =>      cy.contains('.inventory_item_name', 'Sauce Labs Onesie'),
    addSaucebox: () =>  cy.get('[id="add-to-cart-sauce-labs-onesie"]'),
    burMenu: () =>      cy.get('[id="react-burger-menu-btn"]'),
    outLink: () =>      cy.get('[id="logout_sidebar_link"]')   

    }

    logout(){
     this.elements.burMenu().click()
     this.elements.outLink().click()
        
    }

}

export default new inventoryPage()