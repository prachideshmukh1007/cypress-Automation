/// <reference types = "cypress" />
describe('verify iframe in cypress', () => {
    it('example 1', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('#div-main-nav > div > ul > li.active > a').should('have.text','Home')
        // cy.get('[href="index.html"]').should('have.text','Home')

        cy.get('#frame').then(function ($frame) {
            cy.log($frame)
            let iframeBody = $frame.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')

        })
    })

    it('example 2', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function (frame) {
            let iFrameBody = frame[0].contentDocument.body
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')

        })
    })

    it('example 3', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let iframeBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iframeBody.find('[href="index.html"]').should('have.text', 'Home')
    })

    it('example 4', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        
        cy.getiFrameBody('#frame').find('[href="index.html"]').should('have.text', 'Home')
    })

    
    it('example 5',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.getiFrameBody('#courses-iframe').find('[class="dynamic-heading margin-bottom-20"]').should('have.text','All Courses')
    })
})
