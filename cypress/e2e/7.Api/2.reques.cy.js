///<reference types='cypress' />
import data1 from "../../fixtures/1.Api/req1.json"
import data2 from "../../fixtures/1.Api/req2.json"

describe('TS001 : verify reqres Api', function () {

    it('TC001 - verify reqres Api-POST method', function () {
        let data1 = {
            "name": "priti",
            "job": "leader"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: data1
            //data
            //  {
            //     "name": "prachi",
            //     "job": "leader"
            // }
        }).then((respost) => {
            cy.log(respost)
            cy.log(respost.body.id)
            expect(respost.status).to.eq(201)
            //expect(respost.body.name).to.eq('prachi')
            // expect(respost.body.name).to.eq('data.name')
            expect(respost.body.name).to.eq(data1.name)

        })
    })

    data2.forEach((el, idx) => {
        it('TC002 - verify reqres Api-POST method', function () {

            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
            }).then((respost) => {
                cy.log(respost)
                cy.log(respost.body.id)
                expect(respost.status).to.eq(201)

                expect(respost.body.name).to.eq(el.name)

            })
        })

    })

    it('TC003 - verify reqres Api-GET method', function () {
        cy.request({
            url: 'https://reqres.in/api/users?page=1',
            method: 'Get'
        }).then((resGet) => {
            cy.log(resGet)
            cy.log(resGet.body.data[0].first_name)
            expect(resGet.body.data[0].first_name).to.eq('George')
        })

    })

    it.only('TC004 - verify reqres Api-PUT method', function () {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PUT',
            body: {
                "name": "aryan",
                "job": "zion resident"
            }
        }).then((resPut) => {
            cy.log(resPut)
            expect(resPut.body.name).to.eq('aryan')
        })
    })

    it.only('TC005 - verify reqres Api-DELETE method', function () {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: 'DELETE',
        }).then((resDel) => {
            cy.log(resDel)
            expect(resDel.body).to.eq("")
            expect(resDel.status).to.eq(204)
        })
    })
})




