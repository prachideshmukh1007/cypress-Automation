// hooks in cypress
// before , beforeEach , after , afterEach

/// <reference types = "cypress" />

describe('Hooks', function () {
    before(function () {
        cy.log('i will execute first-only one time')
    })

    beforeEach(function () {
        cy.log('i will execute before each test case')
    })

    it('Hooks1', function () {
        cy.log('i am test case 1')
    })

    it('Hooks2', function () {
        cy.log('i am test case 2')
    })

    it('Hooks3', function () {
        cy.log('i am test case 3')
    })

    after(function () {
        cy.log('i will execute after all test case and only once')

    })

    afterEach(function () { 
        cy.log('i will execute after each test case') 
    })

})



