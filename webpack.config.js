// Подключаем расширение для путей
let path = require("path");

// Настройки webpack
let conf = {
  entry: {
    // Указываем входную точку сборки
    app: "./src/index.js"
  },
  output: {
    // Указываем имя и путь сгенерированного файла
    path: path.resolve(__dirname, "www/assets/js"),
    filename: "[name].js"
  },
  // Параметр автоматической пересборки
  watch: false,
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

module.exports = conf;
