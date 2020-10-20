const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
// require('dotenv').config()
const webpack = require('webpack')

module.exports = withCSS(
  withImages({
    // basePath: "/Test",
    inlineImageLimit: 16384,
    webpack: (config) => {
      config.plugins.push(
        new webpack.EnvironmentPlugin(process.env)
      )
      return config
    }
  })
);
