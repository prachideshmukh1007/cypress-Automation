/// <reference types = "cypress" />

describe('traversing Dom element', () => {

    it('flipkart', () => {
        cy.visit('https://www.flipkart.com/')

        cy.get('[placeholder="Search for Products, Brands and More"]').type('bag {enter}')
        //cy.get('#container > div > div.nt6sN V.J  xFEK3._48O0EI > div.DOjaWF.YJG4Cf > div: nth - child(2) > div: nth - child(2) > div > div: nth - child(1) > div > div > div.syl9  
        cy.get('div[class="syl9yP"]').first().should('have.text','SBCOLLECTION')
        
    })
})