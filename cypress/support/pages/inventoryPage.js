

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
    prodCont: () =>     cy.get('.product_sort_container'),    
    prodItemN: () =>    cy.get('.inventory_item_name'),
    vaLidPrice: () =>   cy.get('[class="inventory_container"]'),    
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
    
    sortByPriceLowToHigh() {
        this.elements.prodCont().select('lohi')
        
      }

    validateByPriceLowToHigh() {
        this.elements.vaLidPrice()
            .then(($prices)=>{
               const prices = $prices.map((index, el) => parseFloat(el.innerText.replace('$',''))).toArray()
               const sortedPrices = [...prices].sort((a, b) => a - b)
               expect(prices).to.deep.equal(sortedPrices)  

            })


    }    

}

export default new inventoryPage()