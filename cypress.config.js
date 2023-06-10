const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: "http://159.223.29.67:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
