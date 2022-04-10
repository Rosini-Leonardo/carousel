// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // Main
    mode: 'development',
    devtool:'inline-source-map',
    entry:{
        index: path.join(__dirname,'src','index.js')
    },
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        clean:true,
    },
    // Loaders
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    "presets":['@babel/preset-env']
                }}
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]},
    // HTML
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname,'public','index.html'),
    })],
    // Development Server 
    devServer:{
        hot:true,
        open:true,
        port:8080,
        compress:true,
        liveReload:true,
    }
  };