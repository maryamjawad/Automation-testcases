describe('create user', () => {
  it('open link', () => {
    cy.visit('https://www.demoblaze.com') // open link
    cy.get('a#signin2').click () // click on signup button
    cy.get('#sign-username').type ('test')  //Enter username
    cy.get('#sign-password').type ('12345')  //Enter password
    cy.get('div#signInModal span').click () // Click on signup button
  })
})