var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['webpack-hot-middleware', './src/client.js'],
    output: {
        path: require('path').resolve('./public/js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    babelrc: false,
                    presets: ['react', 'react-hmre', 'stage-2'],
                    plugins: []
                }
            }
        ]
    }
};
