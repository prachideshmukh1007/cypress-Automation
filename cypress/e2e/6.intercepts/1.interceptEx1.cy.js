///<reference  types = "cypress" />

describe('TS001:verify intercept concept', function () {

    it('TC001:verify intercept concept', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: "Get"
        }).as('getcomment')

        cy.contains('Get comment').click()
        cy.wait('@getcomment').then((res) => {
            //cy.log(res)
            //cy.log(res.response.body.body)
            cy.get('[class="network-comment"]').should('have.text',res.response.body.body)
        
        })
        cy.get('[class="network-comment"]').should('contain', 'laudantium enim quasi est ')
    })
})
