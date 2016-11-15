const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: ['./client.jsx', 'webpack-hot-middleware/client'],
    vendor: [
      'react', 'react-dom',
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
  },
  output: {
    path: `${__dirname}/Scripts/dist`,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json'],
  },
  module: {
    loaders: [
      {
        loader: ['babel-loader'],
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
  cache: true,
  stats: {
        // Nice colored output
    colors: true,
  },
    // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
