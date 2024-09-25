const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, // Increase timeout value if necessary
    chromeWebSecurity: false, // Optional, use cautiously

    setupNodeEvents(on, config) {
      // Remove the uncaught:exception listener from here
    },
  },
});
