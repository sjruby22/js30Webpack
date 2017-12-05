import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
      // create HTML file including JS 
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true
      }),
      new CopyWebpackPlugin([
        {from: './src/sounds/', to: 'sounds/'}
        ])
      ],
  module: {
    loaders: [
      // this makes lit-html package run through babel... that seems really dumb...
      {test: /\.js$/, exclude: /node_modules\/(?!(lit-html))/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']},
      {test: /\.wav/, loaders: ['file-loader']}
    ],
  }
}


