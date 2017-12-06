const webpack = require('webpack')
const path = require('path')


const config = {
    context: path.resolve(__dirname, 'app'),
    entry: "./app.jsx",
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            Hello: path.resolve(__dirname, 'app/components/Hello.jsx/'),
        }
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname),
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['react', 'es2017', 'stage-0']
                  }
                }
            }
        ]
    }
}

module.exports = config;
