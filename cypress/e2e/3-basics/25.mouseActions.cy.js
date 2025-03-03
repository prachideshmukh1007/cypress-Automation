///<reference types = "cypress" />
describe('verify mouse actions in cypress', () => {
    it('verify drag and drop', () => {
        // cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        // cy.get('#draggable >p >b').trigger('mousedown',{which : 1})
        // cy.get('#droppable > p> b').trigger('mousemove',{which : 1}).trigger('mouseup',{force: true})
        // cy.get('[style="background-color: rgb(244, 89, 80); height: 100%;"]').should('have.text','Dropped!')

        //type2
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable >p >b').trigger('mousedown', { button: 1 })
        cy.get('#droppable > p> b').trigger('mousemove', { button: 1 }).trigger('mouseup', { force: true })
        cy.get('[style="background-color: rgb(244, 89, 80); height: 100%;"]').should('have.text', 'Dropped!')

    })

    it('verify db click', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').should('not.have.class', 'double')

        //cy.get('#double-click > h2').trigger('dblclick',{button:1})
        //cy.get('#double-click').should('have.class', 'double')

        cy.get('[id="double-click"]').trigger('dblclick', { button: 1 }).should('have.class', 'double')
    })

    it.only('verify hover - link 1', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('[class="list-alert"]').first().should('not.be.visible')
        cy.get('div[class="dropdown-content"]').first().invoke('show')
        cy.get('#div-hover > div.dropdown.hover > button').trigger('mouseover')
        cy.get('[class="list-alert"]').first().should('be.visible').should('have.text','Link 1')
    })

    it('verify hover - link 1', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('[class="list-alert"]').eq(1).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(1).invoke('show')
        cy.get('[class="list-alert"]').eq(1).should('be.visible').should('have.text','Link 1')
  })

  it('verify hover - link 1', () => {
    cy.visit('https://webdriveruniversity.com/Actions/index.html')
    cy.get('[class="list-alert"]').eq(2).should('not.be.visible')
    cy.get('[class="dropdown-content"]').eq(2).invoke('show')
    cy.get('[class="list-alert"]').eq(2).should('be.visible').should('have.text','Link 1')

  })

  it('verify click and hold', () => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').trigger('mousedown',{which : 1}).should('have.text','Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup',{which : 1}).should('have.text','Dont release me!!!')

})

it.only('flipkart',()=>{
    cy.visit('https://www.flipkart.com/')
        cy.get('ul[class="_3YjYK7"]').invoke('show')
       cy.get('ul[class="_3YjYK7"]').find('li').first().should('have.text','Notification Preferences')
  })
})

