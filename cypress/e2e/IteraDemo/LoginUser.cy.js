describe('login', () => {
    it('open link', () => {
      cy.visit('https://www.demoblaze.com') // open link
      cy.get('a#login2').click () // click on login button
      cy.get('#loginusername').type ('test')  //Enter username
      cy.wait(3000)
      cy.get('#loginpassword').type ('test')  //Enter password
      cy.get('.btn-primary').contains('Login').click () // Click on signup button
    })
  })