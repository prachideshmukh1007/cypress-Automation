///<reference types='cypress'/>

describe("TS001:verify contact us page with Payload ", function () {
    let dataset = {
        nm: 'prachi',
        ln: 'deshmukh',
        email: 'prachideshmukh@gmail.com',
        msg: 'i am learning cypress'
    }

    it('TC001 - verify contact us page for valid data', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(dataset.nm)
        cy.get('[name="last_name"]').type(dataset.ln)
        cy.get('[name="email"]').type(dataset.email)
        cy.get('[name="message"]').type(dataset.msg)

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('TC002 - verify contact us page with fixtures file', function () {
        cy.fixture("1.contactUsPayload.json").then((user) => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type('dataset.fn')
            cy.get('[name="last_name"]').type('dataset.ln')
            cy.get('[name="email"]').type('dataset.email')
            cy.get('[name="message"]').type('dataset.msg')

            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })

        it('TC003 - verify contact us page with fixture file', function () {
            cy.fixture("1.CUPload.json").then(function (user) {
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(user.userOne.fn)
                cy.get('[name="last_name"]').type(user.userOne.ln)
                cy.get('[name="email"]').type(user.userOne.email)
                cy.get('[name="message"]').type(user.userOne.msg)

                cy.get('[type="submit"]').click()

                cy.get('h1').should('have.text', 'Thank You for your Message!')
            })


            it('TC003 - verify contact us page with fixture file', function () {
                cy.fixture("1.CUPload.json").then(function (user) {
                    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                    cy.get('[name="first_name"]').type(user.userTwo.fn)
                    cy.get('[name="last_name"]').type(user.userTwo.ln)
                    cy.get('[name="email"]').type(user.userTwo.email)
                    cy.get('[name="message"]').type(user.userTwo.msg)

                    cy.get('[type="submit"]').click()

                    cy.get('h1').should('have.text', 'Thank You for your Message!')
                })

            })
        })
    })
})
