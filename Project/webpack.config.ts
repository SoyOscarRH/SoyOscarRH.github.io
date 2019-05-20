import { Configuration } from "webpack"

const Configuration: Configuration = {
  entry: __dirname + "/Code/App",
  output: {
    path: __dirname + "/Distribution",
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "dts-css-modules-loader",
            options: {
              namedExport: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              camelCase: "only",
              localIdentName: "[name]_[local]_[hash:base64]",
              exportOnlyLocals: true,
              sourceMap: true,
              modules: true,
            },
          },
        ],
      },
    ],
  },
}

module.exports = Configuration
