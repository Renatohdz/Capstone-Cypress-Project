

class LoginPage {
    elements= {
        //Form Selector 
        nameLabel: () => cy.get('[id="user-name"]'),
        passwordLabel: () => cy.get('[id="password"]'),
        bNext: () => cy.get('[id="login-button"]'),
        containe: ()=> cy.get('[class="product_sort_container"]')

        }

    loginUser(standard_user, secret_sauce){
    this.elements.nameLabel().type(standard_user)
    this.elements.passwordLabel().type(secret_sauce)
    this.elements.bNext().click()
        }

     

    


}

export default new LoginPage()
