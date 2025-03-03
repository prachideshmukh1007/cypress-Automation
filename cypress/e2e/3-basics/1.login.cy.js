///<reference types="cypress" />

describe("verify contact us page",function(){ // suite
   it ("verify contact us page for valid data",function(){    // test case
     /// AAA
     /// Arrangements , Actions , Assertions

     /// Arrangements
     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

     /// Actions
     cy.get('[name="first_name"]').type('prachi')
     cy.get('[name="last_name"]').type('deshmukh')
     cy.get('[name="email"]').type('prachideshmukh1007@gmail.com')
     cy.get('[name="message"]').type('i am learning cypress')
     cy.get('[type="submit"]').click()

     /// Assertions
     cy.get('h1').should('have.text','Thank You for your Message!')

   })
//    it("",function(){    

//    })
//    it("",function(){    

})   

