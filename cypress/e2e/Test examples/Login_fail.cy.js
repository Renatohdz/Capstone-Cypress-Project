
describe('Login_fail', () => {

  beforeEach (()=> {
    //delete all cookies before each run
    cy.clearAllCookies()

    })

  it('Login with an invalid user', () => {
    
    //Visit the login page 
    cy.visit('/') //Open the page

    //Add Credentials username and password
    cy.get('[id="user-name"]').type('locked_out_user')
    cy.get('[id="password"]').type('secret_sauce')

    //valida que te quedas en la misma pagina 
    cy.url().should('include','/')
    

  })
})
