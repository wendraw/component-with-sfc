module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  pragma: "createElement",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.view$/,
        use: {
          loader: require.resolve("./src/view-loader.js"),
        },
      },
    ],
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
};
