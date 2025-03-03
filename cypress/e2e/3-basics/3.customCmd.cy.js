/// <reference types ="cypress" />

describe('verify login page of OHRM',()=>{
  it('verify for valid data',()=>{
    // AAA

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')

    cy.get('.orangehrm-login-button').click()

    cy.get(' .oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
  })


  it('verify for invalid data',()=>{
    // AAA

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get('[name="username"]').type('prachi')
    cy.get('[name="password"]').type('prachi123')

    cy.get('.orangehrm-login-button').click()

    cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
  })


  it('verify for valid data with custom commands',() => {
    // AAA

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.OHRMlogin('Admin','admin123')

    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
  })


  it.only('verify for invalid data with custom command',()=>{
    // AAA

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.OHRMlogin('prachi','prachi123')

    cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')

  })

})
  
  
