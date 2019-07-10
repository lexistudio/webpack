let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require("path");

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.styl$/,
          exclude: "/node_modules/",
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            "stylus-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ]
  };
};
