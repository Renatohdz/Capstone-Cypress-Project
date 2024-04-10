

class inventoryPage {
    elements = {
    //Form Selector
    titleSpam: () => cy.get('[class="title"]'),
    invItem: () =>   cy.contains('.inventory_item_name', 'Sauce Labs Onesie'),
    addSaucebox: () => cy.get('[id="add-to-cart-sauce-labs-onesie"]'),
    
    
      
    }


}

export default new inventoryPage()