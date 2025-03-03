// install folling plugin
//npm install xml2js


///<reference types = "cypress"/>
const xml2js = require("xml2js");
const parser = new xml2js.Parser({explicitArray:false});

describe("verify soap api in cypress",()=>{
    it("f to c api",()=>{
        const xmlData = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"><Fahrenheit>string</Fahrenheit></FahrenheitToCelsius></soap:Body></soap:Envelope>'
        
        cy.request({
            url:"https://www.w3schools.com/xml/FahrenheitToCelsius",
            method:"POST",
            body: xmlData,
            headers:{
                "Content-Type": "text/xml",
                "accept" : "*/*"
            },
            failOnStatusCode: false
        }).then((xmlRes)=>{
            cy.log(xmlRes)
        })

        })
            

        })

        
        
    

    
