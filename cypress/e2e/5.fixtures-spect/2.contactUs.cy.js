///<reference types='cypress'/>

import data from "../../fixtures/1.contactUsPayload.json"
import data1 from "../../fixtures/2.CUPload.json"

describe("TS001:verify contact us page with Payload ", function () {

    it('TC001 - verify contact us page for valid data', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data.fn)
        cy.get('[name="last_name"]').type(data.ln)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.msg)

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('TC002 - verify contact us page for valid data', function () {
        data1.forEach(function (el) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)

            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })
    data1.forEach(function (el, index) {
        it.only(`TC003 - verify contact us page for valid dataset of ${index+1}and ${el.fn}`, function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)

            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})

