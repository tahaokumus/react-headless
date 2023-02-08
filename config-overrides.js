// config-overrides.js
const { aliasWebpack, aliasJest } = require("react-app-alias");

const options = {}; // default is empty for most cases

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);

/*
const { aliasWebpack, aliasJest, CracoAliasPlugin } = require("react-app-alias");
const { override, adjustStyleLoaders } = require("customize-cra");

module.exports = override(
  (config) => {
    config = aliasWebpack({})(config);

    config.optimization.splitChunks = {
      cacheGroups: { default: false },
    };
    config.optimization.runtimeChunk = false;
    config.output.filename = 'static/js/main.js';

    return config;
  },
  adjustStyleLoaders(({ use }) => {
    use.forEach((loader) => {
      if (/mini-css-extract-plugin/.test(loader.loader)) {
        loader.loader = require.resolve("style-loader");
        loader.options = {};
      }
    });
  }),
);
*/