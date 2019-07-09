module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["env", "stage-3", "es2015", "es2016"]
              }
            }
          ]
        }
      ]
    }
  };
};
