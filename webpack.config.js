const webpack = require('webpack');
const path = require('path');
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: ['./client.jsx', 'webpack-hot-middleware/client']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    },
    extensions: ['.js', '.scss', '.css', '.json'],
  },
  module: {
    loaders: [
      {
        loader: ['react-hot-loader', 'babel-loader'],
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
      },
            { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=compressed',
      },
    ],
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [
            './node_modules',
          ],
        },
      },
    }),
  ] :
    [
        // Avoid publishing files when compilation fails
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          sassLoader: {
            includePaths: [
              './node_modules',
            ],
          },
        },
      }),
    ],
  stats: {
        // Nice colored output
    colors: true,
  },
    // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
