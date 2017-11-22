import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
      // Generate a seperate css file with a hash in the file name
      new ExtractTextPlugin('[name].[contentHash].css'),
      // Add a hash suffix to file names for cache busting
      new WebpackMd5Hash(),
      // Use CommonsChunkPlugin to create a seperate bundle
      // of NPM modules so they're cached seperately
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      // create HTML file including JS 
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
        // there are way more options that could be enabled. Somthing to look into later
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),
    // Minify JS
      new webpack.optimize.UglifyJsPlugin(),
      // Eliminate dupliacte packages when bundeling modules
      new webpack.optimize.DedupePlugin()
    ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules\/(?!(lit-html))/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}