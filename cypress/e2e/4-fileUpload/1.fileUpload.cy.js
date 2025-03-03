/// <reference types = "cypress" />

describe('verify file upload option in cypress', () => {
    it('verify single file upload 1', () => {
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('[id="myFile"]').selectFile("C:/Users/Admin/Desktop/postmanGoRest.lnk")
        cy.on('window:alert', function (text) {
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain', 'postmanGoRest.lnk')


    })

    it('verify single file upload 2', () => {
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        let path = "C:/Users/Admin/Desktop/postmanGoRest.lnk"
        cy.get('[id="myFile"]').selectFile(path)
        cy.on('window:alert', function (text) {
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain', 'postmanGoRest.lnk')
})

it.only('verify multiple file upload ', () => {
    cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
    let path1 = "C:/Users/Admin/Desktop/postmanGoRest.lnk"
    let path2 = "C:/Users/Admin/Desktop/Cypress Automation/cypress/e2e/4-fileUpload/postmandata.lnk"
    cy.get('[id="ember337"]').selectFile([path1,path2])
    cy.get('[id="ember354"]').should('contain','2')
   })
})  