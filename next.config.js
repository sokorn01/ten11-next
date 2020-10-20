const withCSS = require("@zeit/next-css");
// require("dotenv").config();
// const path = require("path");
// const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");
require('dotenv').config()
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
    // webpack(config, options) {
    //   config.plugins = config.plugins || [];
    //   config.plugins = [
    //     ...config.plugins,
    //     // Read the .env file
    //     new Dotenv({
    //       path: path.join(__dirname, ".env"),
    //       systemvars: true,
    //     }),
    //   ];
    //   return config;
    // },
  })
);
