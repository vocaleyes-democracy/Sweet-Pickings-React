/*
   config-overrides.js
   This file is required by https://github.com/timarney/react-app-rewired
   Overrides the built-in webpack config that's in create-react-app
*/
const { StylableWebpackPlugin } = require("@stylable/webpack-plugin");

module.exports = {
  webpack: function override(config, env) {
    // 1. Add Stylable plugin
    // Config options https://www.npmjs.com/package/@stylable/webpack-plugin#plugin-configuration-options
    config.plugins.push(new StylableWebpackPlugin());

    // 2. Exclude all `.st.css` files from webpack loaders
    config.module.rules = config.module.rules.map(rule => {
      if (typeof rule.oneOf !== "undefined") {
        rule.exclude = /\.st\.css$/;
      }

      return rule;
    });

    return config;
  },

  jest: function (config) {
    // Using this as a setup guide to modify the jest.config.js file
    // that's embedded within the create-react-app project
    // https://github.com/wix/stylable/tree/master/packages/jest

    // Use Stylable for `.st.css` files
    config.transform["\\.st\\.css?$"] = require.resolve("@stylable/jest");
    config.transformIgnorePatterns.push("/node_modules/(?!(.*?\\.st\\.css$))");

    // Ignore any `.css` files as they're handled by Stylable
    delete config.transform["^.+\\.css$"];

    return config;
  }
};
