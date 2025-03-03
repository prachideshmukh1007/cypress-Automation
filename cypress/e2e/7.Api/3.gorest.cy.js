///<reference types='cypress' />
import postD from "../../fixtures/1.Api/gorPostData"
import putD from "../../fixtures/1.Api/gorPutData"

describe('TS001 : verify reqres Api for gorest', function () {
    postD.forEach((el, index) => {
        it('TC001 - verify reqres Api-post Get put delete method', function () {
            const token = 'f4f3ff7402e4d1278848a3695f8b48c4f9413aa994957fd2c0b7b7ac614cd5fe'
            cy.request({
                url: 'https://gorest.co.in/public/v2/users',
                method: 'POST',
                body: el,
                // {
                //     "name": "prachi deshmukh",
                //     "gender": "male",
                //     "email": "prachi11@gmail.com",
                //     "status": "active"
                // },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((respost) => {
                //cy.log(respost.body.id)
                expect(respost.body.name).to.eq(el.name)
                return respost.body.id
            }).then((userId) => {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    method: 'PUT',
                    body: putD[index]
                })
            })
        })
    })
})