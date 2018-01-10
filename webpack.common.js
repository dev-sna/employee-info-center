const webpack = require('webpack'),
      path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin');
    //   HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'public', 'bundle'),
        filename: 'bundle.js'
    },
    plugins: [
             new CleanWebpackPlugin(['public/bundle']),
            //  new HtmlWebpackPlugin({
            //    title: 'Production'
            //  })
           ]
    ,
    module: {
        rules: [
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)/i
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }

}