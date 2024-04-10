

class LoginPage {
    elements= {
        //Form Selector 
        nameLabel: () => cy.get('[id="user-name"]'),
        passwordLabel: () => cy.get('[id="password"]'),
        bNext: () => cy.get('[id="login-button"]'),
        containe: ()=> cy.get('[class="product_sort_container"]')

        }

    typeUsername(standard_user){
    this.elements.nameLabel().type(standard_user)
        }

    typePassword(secret_sauce){
        this.elements.passwordLabel().type(secret_sauce)
        }

    clickLogin(){
        this.elements.bNext().click()

    }    

    


}

export default new LoginPage()
