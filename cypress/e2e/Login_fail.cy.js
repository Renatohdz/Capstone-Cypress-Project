
describe('Login_fail', () => {

  beforeEach (()=> {
    cy.clearAllCookies()

    })

  it('Login with an invalid user', () => {
    
    //Visit the login page 
    cy.visit('/') //Open the page

    //Add Credentials username and password
    cy.get('[id="user-name"]').type('locked_out_user')
    cy.get('[id="password"]').type('secret_sauce')



  })
})