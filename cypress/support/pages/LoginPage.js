

class LoginPage {
    elements= {
        //Form Selector 
        nameLabel: () => cy.get('[id="user-name"]'),
        passwordLabel: () => cy.get('[id="password"]'),
        bNext: () => cy.get('[id="login-button"]'),
        containe: ()=> cy.get('[class="product_sort_container"]')



    }

}

export default new LoginPage()