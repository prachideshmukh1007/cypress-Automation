///<reference types = "cypress" />
import data from "../../fixtures/1.Api/req1.json"
import data2 from "../../fixtures/1.Api/req2.json"
//CURD
describe('TS001 : verify reqres Api', function () {

    it('TC001 - verify reqres Api-Get method', function () {


        cy.request({
            url: 'https://reqres.in/api/users?page=1',
            method: 'Get'
        }).then((resGet) => {
            cy.log(resGet.body.data[0].first_name)
            expect(resGet.status).to.eq(200)
            expect(resGet.statusText).to.eq("OK")
            expect(resGet.body.data[0].first_name).to.eq("George")
        })
    })

    it('TC002 - verify reqres Api-POST method', function () {
        let user = {
            "name": "prachi",
            "job": "leader"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: data
            // user
            //{
            //          "name": "prachi",
            //          "job": "leader"
            //     }
        }).then((resPost) => {
            cy.log(resPost)
            //    expect(resPost.body.name).to.eq("prachi")
            expect(resPost.body.name).to.eq(data.name)
        })
    })



    data2.forEach((el, index) => {
        it.only('TC003 - verify reqres Api-POST method', function () {

            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
            }).then((resPost) => {
                cy.log(resPost)
                expect(resPost.body.name).to.eq(el.name)
            })

        })
    })

})



