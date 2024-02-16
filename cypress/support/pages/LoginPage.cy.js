

class LoginPage {
    constructor() {
        //Form Selector 
        this.nameLabel () => cy.get ('[id="user-name"]')
        this.passwordLabel () => cy.get ('[id="password"]')
        this.bNext () => cy.get ('[id="login-button"]')
        



    }

}

export default new LoginPage()