describe('login', () => {
    it('open link', () => {
      cy.visit('https://www.demoblaze.com') // open link
      cy.get('div#contcont a:nth-child(2)').click ()// click on tab Mobiles
      cy.get('div#tbodyid div:nth-child(1) > div > div > h4 > a').click ()//Click on product
      cy.get('div#tbodyid a').click () //Click on Add to cart button
      cy.get('div#navbarExample li:nth-child(4) > a').click ()//Click on 'Cart' tab
    })
  })