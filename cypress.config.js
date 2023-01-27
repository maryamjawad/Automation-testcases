const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8yjhko',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
