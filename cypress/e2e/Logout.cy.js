
describe('Logout in wwww.saucedemo.com', () => {

  beforeEach (()=> {
    //delete all cookies before each run
    cy.clearAllCookies()

     //Visit the login page 
    cy.visit('/') //Open the page

  //Add Credentials username and password
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')

    //Click button Login
    cy.get('[id="login-button"]').click() // click in login

    })

  it('Logout page', () => {

   //click on the burger menu
   cy.get('[id="react-burger-menu-btn"]').click()

   //click on the logout link
   cy.get('[id="logout_sidebar_link"]').click()

  //validate the logout session
  //cy.url('/').should('include'. '/inventory.html' )


  })
})