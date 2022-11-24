const { defineConfig } = require("cypress");
const {cypressEsbuildPreprocessor} = require('cypress-esbuild-preprocessor');
const path = require('path');





module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern:"cypress/e2e/*.cy.js",
    chromeWebSecurity:false,
    baseUrl:"http://www.musala.com/",


    setupNodeEvents(on, config) {

     
      require('cypress-mochawesome-reporter/plugin')(on);
      const cucumber = require('cypress-cucumber-preprocessor').default
      

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
 
      
    },
  
  },
});
