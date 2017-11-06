var webpack = require("webpack");
var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var DIST_DIR = path.resolve(path.join(__dirname, "dist"));
var APP_DIR = path.resolve(path.join(__dirname, "src", "js"));

var config = {
  devtool: "source-map",
  entry: path.join(APP_DIR + "/angularModuleDevSkeleton.js"),
  output: {
    path: DIST_DIR,
    filename: "angularModuleDevSkeleton.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins : [
    new CopyWebpackPlugin([{ from: 'src/index.html', to: 'index.html' }])
  ]
};

module.exports = env => {

  console.log('Env: ', env)
  if(env.prod){

    // exclude angular in prod build ...
    config.externals = {
      angular: 'angular'
    }

    // use UglifyJs in prod build...
    config.plugins.push(new UglifyJSPlugin())
    config.output.filename = "angularModuleDevSkeleton.min.js";

  }

  return config;
}
