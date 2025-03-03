const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //includeShadowDom : true,
   chromeWebSecurity : false,// for multi-tab and multi-window
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
     // implement node event listeners here 
    // task 1 (11.cytask)-------------------
    on('task',{
      myTask1(){
        console.log('hello')
        return null

      }
    })

    //// task2
    on('task',{
      myTask2(nm){
        console.log(`hi ${nm} how are you?`)
        return null

      }
    })

    //// task3 addtion
    on('task',{
      addition({a,b}){
        c=a+b
        console.log(c)
        return c
      }
    })
  }
  
}
})


  
