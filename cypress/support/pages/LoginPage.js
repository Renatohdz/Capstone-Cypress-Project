

class LoginPage {
    elements= {
        //Form Selector 
        nameLabel: () =>     cy.get('[id="user-name"]'),
        passwordLabel: () => cy.get('[id="password"]'),
        bNext: () =>         cy.get('[id="login-button"]'),
        containe: ()=>       cy.get('[class="product_sort_container"]'),
        errorMsg: ()=>       cy.get('[data-test="error"]'),
        errorPass: () =>     cy.get('[id="password"]'),

        }

    loginUser(standard_user, secret_sauce){
    this.elements.nameLabel().type(standard_user)
    this.elements.passwordLabel().type(secret_sauce)
    this.elements.bNext().click()
        }

    errorMsg(standard_user, error_pass){
    this.elements.nameLabel().type(standard_user)
    this.elements.errorPass().type(error_pass)
    this.elements.bNext().click()
    this.elements.errorMsg().should('have.text','Epic sadface: Username and password do not match any user in this service')

    }    




}

export default new LoginPage()
