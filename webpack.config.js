const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", 
    "./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"), // the bundle output path
    filename: "[name].bundle.js", // the name of the bundle
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3000, // you can change the port
  },
  optimization: {
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.eot$/, loader: 'url-loader',
          options: {
            limit: 100000,
            mimetype : 'application/vnd.ms-fontobject'
        }
      },
      { test: /\.woff2$/, loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype : 'application/font-woff2'
      }
    },
      { test: /\.woff$/, loader: 'url-loader',
      options: {
        limit: 100000,
        mimetype : 'application/font-woff'
      }
      },
     { test: /\.ttf$/, loader: 'url-loader',
          options: {
            limit: 100000,
            mimetype : 'application/font-ttf'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};