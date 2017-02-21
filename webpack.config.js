var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var development = process.argv.indexOf('-p') === -1;
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');



console.log('Developoment: ',development, 'NODE_ENV:'+ process.env.NODE_ENV);
/*
  development is alot faster then production

  Running 'webpack' with production creates dist
*/

var config = {
  context: path.join(__dirname, 'dev'),
  devtool: development ? "inline-sourcemap" : null,
  entry: [
    './js/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, 
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { test: /\.css$/, 
        loader: development ? 'style!css!postcss' : ExtractTextPlugin.extract('css!postcss')
      },
      { test: /\.styl$/, 
        loader: development ? 'style!css!postcss!stylus' : ExtractTextPlugin.extract('css!postcss!stylus')
      }, 
      { test: /\.(html)$/,
        loader: "file?name=[path][name].[ext]&context=./dev"
      },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file" 
      }
    ]
  },
  postcss: [ autoprefixer( { browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] } )],
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'stylus'],
    alias: {
      images: path.join(__dirname, 'dist/img')
    }
  },
  plugins: development? [] : [
    new CopyWebpackPlugin([
      { from: 'projects', to: '../dist/projects' }]),
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};

module.exports = config;
