const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const forkTsCheckerWebpackPlugin=require('fork-ts-checker-webpack-plugin');
module.exports = {
  mode: "development",
  entry: "./main.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [ {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [['postcss-preset-env']],
            },
          },
        },
        'sass-loader',
      ],
    },{
      test: /\.(png|jpe?g|gif|svg)$/i, 
      loader: 'file-loader',
      options: {
        name: '/public/icons/[name].[ext]'
      }
  }, {
    test: /\.(png|jpg|gif|jpeg|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    })
  ],
};
