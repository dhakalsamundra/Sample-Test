// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import "dotenv/config";


const pluginConfig: Cypress.PluginConfig = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // TODO: remove this once https://github.com/cypress-io/cypress/issues/2777 is solved
  // this is to prevent running command twice if config.baseUrl is not set in cypress.json

  on("task", {
  });
  config.baseUrl = config.env.BASE_URL;
  config.env.CYPRESS_TESTRAIL_REPORTER_PASSWORD = process.env.CYPRESS_TESTRAIL_REPORTER_PASSWORD
  return config;
};

export = pluginConfig;
