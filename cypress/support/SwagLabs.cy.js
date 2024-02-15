
cy.visit('/') // visits the baseUrl
cy.visit('index.html') // visits the local file "index.html" if baseUrl is null
cy.visit('https://www.saucedemo.com/') // specify full URL if baseUrl is null or the domain is different the baseUrl
cy.visit({
  url: 'https://www.saucedemo.com/',
  method: 'GET',
})