///<reference types='cypress'/>

describe("TC001:verify contact us page ",function(){ // suite
   it.skip("TC001-verify contact us page for valid data",function(){  // test case 1

    /// AAA
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
  
    cy.get('[name="first_name"]').type('prachi')
    cy.get('[name="last_name"]').type('deshmukh')
    cy.get('[name="email"]').type('prachideshmukh1007@gmail.com')
    cy.get('[name="message"]').type('hi')


    cy.get('[type="submit"]').click()

    cy.get('h1').should('have.text','Thank You for your Message!')

   })

   it ("TC002 - verify contact us page for invalid emailid ",function(){
      cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

      cy.get('[name="first_name"]').type('onkar')
      cy.get('[name="last_name"]').type('deshmukh')
      cy.get('[name="email"]').type('onkar')
      cy.get('[name="message"]').type('hi')

      cy.get('[type="submit"]').click()

      cy.contains('Error: Invalid email address').should('be.visible')

   })

   it.only("TC003- verify contact us page for skip field",function(){
      cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

      cy.get('[name="first_name"]').type('onkar')
      
      cy.get('[name="email"]').type('onkardeshmukh@gmail.com')
      cy.get('[name="message"]').type('hi')

      cy.get('[type="submit"]').click()

      cy.contains('Error: all fields are required').should('be.visible')

   })

   it.only("TC004- verify contact us page for reset button",function(){
      cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

      cy.get('[name="first_name"]').type('onkar')
      cy.get('[name="last_name"]').type('deshmukh')
      cy.get('[name="email"]').type('onkardeshmukh@gmail.com')
      cy.get('[name="message"]').type('hi')

      cy.get('[type="reset"]').click()

      cy.get('[name="first_name"]').should('have.text',"")
      cy.get('[name="last_name"]').should('have.text',"")
      cy.get('[name="email"]').should('have.text',"")
      cy.get('[name="message"]').should('have.text',"")

   })
   
})






