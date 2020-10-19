const withCSS = require("@zeit/next-css");
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    distDir: "build",
    // basePath: "/Test",
    inlineImageLimit: 16384,
    exportTrailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        "/": { page: "/" },
        "/account": { page: "/account" },
        "/product/women": { page: "/product/[...slug]" },
      };
    },
    webpack(config, options) {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true,
        }),
      ];
      return config;
    },
  })
);
