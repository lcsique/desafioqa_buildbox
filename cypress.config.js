const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://buger-eats.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "reporter": "mochawesome",
    "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp": "ddmmyyyy_HHMMss"
    },

});
