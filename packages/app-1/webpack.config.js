const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// var LiveReloadPlugin = require('webpack-livereload-plugin');
// import the plugin
// const { MFLiveReloadPlugin } = require("@module-federation/fmr");
const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';

const deps = require("./package.json").dependencies;
module.exports = {
  mode: "development",
  entry: './src/index.js',

  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    hot: true,
    allowedHosts: 'all',
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // static: path.join(__dirname, 'dist'),
    // devMiddleware: {
    //   writeToDisk: true,
    // },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [require.resolve('react-refresh/babel')],
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    // new MFLiveReloadPlugin({
    //   port: 8080, // the port your app runs on
    //   container: "app_1", // the name of your app, must be unique
    //   // standalone: false, // false uses chrome extention
    // }),
    // new LiveReloadPlugin(options),
    new ReactRefreshWebpackPlugin({
      
    }),
//     new ReactRefreshPlugin({
//       exclude: [/node_modules/, /bootstrap\.js$/],
// }),
    new ModuleFederationPlugin({
      name: "app_1",
      filename: "remoteEntry.js",
      remotes: {
        app_2: 'app_2@http://localhost:8081/remoteEntry.js'
      },
      exposes: {},
      shared: { react: { singleton: false, requiredVersion: "18.2.0" }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ]
  // ].filter(Boolean),
};
