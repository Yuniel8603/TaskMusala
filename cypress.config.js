const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://www.musala.com/",
    setupNodeEvents(on, config) {
      
    },
  },
});
