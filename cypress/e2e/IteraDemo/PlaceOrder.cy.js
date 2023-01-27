describe('login', () => {
    it('open link', () => {
      cy.visit('https://www.demoblaze.com') // open link
      cy.get('div#contcont a:nth-child(2)').click ()// click on tab Mobiles
      cy.get('div#tbodyid div:nth-child(1) > div > div > h4 > a').click ()//Click on product
      cy.get('div#tbodyid a').click () //Click on Add to cart button
      cy.get('div#navbarExample li:nth-child(4) > a').click ()//Click on 'Cart' tab
      cy.get('div#page-wrapper button[type="button"]').click ()//Click on Place order button
      cy.get('#name').type ('Maryam') // Enter name 
      cy.wait(3000)
      cy.get('#country').type ('Norway')//Enter country
      cy.get('#city').type ('Oslo')// ENter city
      cy.get('#card').type ('12345675432123') //Enter card number
      cy.get('#month').type ('12')//Enter Month
      cy.get('#year').type ('2023')//Enter Year
      cy.get('.btn-primary').click () //Click on Purchase button
    })
  })