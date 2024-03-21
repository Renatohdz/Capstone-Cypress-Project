import loginPage from "../support/pages/LoginPage"

describe ('Order Product',() => {

    beforeEach(()=>{
    //delete all cookies before each run
        cy.clearAllCookies() 

    //Visit the login page   
        cy.visit('/') //Open the page

    })

    it ('Product',()=>{

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

        //cy.get('class="inventory_item_name "]')
        //cy.should('include' , '7.99')

        


    })
}) 