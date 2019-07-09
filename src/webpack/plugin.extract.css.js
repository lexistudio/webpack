let MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            {
              loader: "css-loader"
            },
            {
              loader: "stylus-loader"
            }
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
