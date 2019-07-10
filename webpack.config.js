let merge = require("webpack-merge");
let path = require("path");
let Babel = require("./src/webpack/module.babel");
let Css = require("./src/webpack/plugin.extract.css");

let common = merge([
  {
    entry: {
      app: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, "www/assets/js"),
      filename: "[name].js",
      publicPath: "./www"
    },
    watch: false,
    mode: "production"
  },
  Babel(),
  Css()
]);

module.exports = common;
