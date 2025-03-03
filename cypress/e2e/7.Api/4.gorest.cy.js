///<reference types='cypress' />
import postData from "../../fixtures/1.Api/gorPostData"
import putData from "../../fixtures/1.Api/gorPutData"

describe('TS001 : verify reqres Api for gorest', function () {

postData.forEach((el,index)=>{
    it("verify e2e testing of api",()=>{
        const token = "f4f3ff7402e4d1278848a3695f8b48c4f9413aa994957fd2c0b7b7ac614cd5fe"
        cy.request({
            url : "https://gorest.co.in/public/v2/users",
            method : 'POST',
            body : el,
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then((resPost)=>{
            //cy.log(resPost)
            expect(resPost.body.name).to.eq(el.name)
            expect(resPost.status).to.eq(201)
            return resPost.body.id
        }).then((userId)=>{
            cy.request({
                url : `https://gorest.co.in/public/v2/users/${userId}`,
                method : 'PUT',
                body  :putData[index],
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((resPut)=>{
                //cy.log(resPut)
                expect(resPut.body.name).to.eq(putData[index].name)
            }).then(()=>{
                cy.request({
                    url : `https://gorest.co.in/public/v2/users/${userId}`,
                    method : 'DELETE',
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }).then((resDelete)=>{
                    //cy.log(resDelete)
                    expect(resDelete.body).to.eq("")
                    expect(resDelete.status).to.eq(204)
                })
            })
        })
    })
})
})