

class LoginPage {
    elements= {
        //Form Selector 
        nameLabel: () => cy.get('[id="user-name"]'),
        passwordLabel: () => cy.get('[id="password"]'),
        bNext: () => cy.get('[id="login-button"]')




    }

}

export default new LoginPage()