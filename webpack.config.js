module.exports = {
  entry: "./app-client.js",
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|app-server.js)/,
        loader: "babel-loader",
        query: {
          presets: ["react"]
        }
      }
    ]
  }
};
