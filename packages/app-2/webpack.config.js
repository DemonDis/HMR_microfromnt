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
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8081,
    hot: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: path.join(__dirname, 'dist'),
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
    // new LiveReloadPlugin(options),
    // new MFLiveReloadPlugin({
    //   port: 8081, // the port your app runs on
    //   container: "app_2", // the name of your app, must be unique
    //   // standalone: false, // false uses chrome extention
    // }),
    new ReactRefreshWebpackPlugin({
      
    }),
      //   new ReactRefreshPlugin({
      //        exclude: [/node_modules/, /bootstrap\.js$/],
      //  }),
      
    new ModuleFederationPlugin({
      name: "app_2",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './BtnApp2': './src/BtnApp2.js'
      },
      shared: { react: { singleton: false }, 'react-dom': { singleton: false } },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ]
  // ].filter(Boolean),
};
