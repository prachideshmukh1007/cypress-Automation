/// <reference types = "cypress" />
describe('verify drop down option',()=>{
    it('verify static drop down option',()=>{
        cy.visit("https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html")
        cy.get('#myInput').type('b')
        cy.get('#myInputautocomplete-list>div').each(function(el){
            //cy.log(el.text())
           if (el.text()=='Bagels'){
            cy.wrap(el).click()
            cy.get('#submit-button').click()
            cy.url().should('contain','Bagels')
           }
        })
    })

    it.only('verify dynamic drop down option',()=>{
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root')
       // cy.get('[class=_8ULqYw]').eq(1)
        cy.get('[class=_8ULqYw]:nth(1)').click()
        cy.get('#pv-search-nav').type('push')
        cy.get('[class="a0VjRs"]>li').each(function(el){
            //cy.log(el.text())
            if (el.text()== 'pushpa the rise hindi'){
                cy.wrap(el).click()
                cy.contains('Results for "pushpa the rise hindi".').should('be.visible')
                cy.get('[data-testid="card-section"]').click()
            }
        })

    
    })

})