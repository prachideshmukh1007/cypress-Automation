/// <reference types="cypress" />

describe('verify text of element', () => {

    it('to get text of element-method 1', () => {
        cy.visit('https://www.google.co.in/')
        cy.get('[class="uU7dJb"]').invoke('text').then((txt) => {
            cy.log(txt)
        })


        it('to get text of element-method 1', () => {
            cy.visit('https://webdriveruniversity.com/')
            cy.get('#contact-us > div > div.caption > h4').then(($txt)=>{
                cy.log($txt.text())
            })

            })
        })

    })

