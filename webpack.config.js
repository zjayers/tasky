const webpack = require("webpack");
const path = require("path");

const config = {
  target: "electron-renderer",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
