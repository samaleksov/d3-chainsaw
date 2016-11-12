var webpack = require('webpack');
var PROD = process.env.NODE_ENV == 'production';

module.exports = {
    entry: {
      app: ["./client.js", 'webpack-hot-middleware/client'],
      vendor: [
       'react', 'react-dom', 'jquery'
      ]
    },
    output: {
        path: __dirname + "/Scripts/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
    		extensions: ['.js', '.scss', '.css']
    },
    module: {
        loaders: [
            {
                loader: ['react-hot','babel-loader'],
                test: /\.js/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=compressed'
            }
        ]
    },
    plugins: PROD ? [
              new webpack.optimize.UglifyJsPlugin({minimize: true}),
              new webpack.optimize.OccurrenceOrderPlugin(),
              new webpack.HotModuleReplacementPlugin(),
              new webpack.NoErrorsPlugin(),
              new webpack.ProvidePlugin({ $: "jquery" }),
              new webpack.LoaderOptionsPlugin({
               options: {
                 sassLoader: {
                   includePaths: [
                     './node_modules'
                   ]
                 }
               }
             })
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
               './node_modules'
             ]
           }
         }
       })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
