var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    
    './app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.scss$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader!sass-loader'
    }
    ]
  }
};
