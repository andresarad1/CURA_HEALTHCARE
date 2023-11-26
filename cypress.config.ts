const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
  },
  env: {
    healthcare :{
      url : 'https://katalon-demo-cura.herokuapp.com/'
    }
  }
});
