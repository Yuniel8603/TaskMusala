const { defineConfig } = require("cypress");
const createBundler  = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocesoorPlugin=require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocesoorPlugin;
const createEsbuildPlugin=require("@badeball/cypress-cucumber-preprocessor").ceateEsbuildPlugin;
const {cypressEsbuildPreprocessor} = require('cypress-esbuild-preprocessor');
const path = require('path');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    baseUrl:"http://www.musala.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
module.exports = (on, config) => {
  on(
      'file:preprocessor',
      cypressEsbuildPreprocessor({
          esbuildOptions: {
           tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
          },
      }),
  );
};
      
    },
    specPattern:"cypress/e2e/features/*.feature",
    chromeWebSecurity:false
  },
});
