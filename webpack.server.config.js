const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'server.bundle.js'
    },
    target: 'node',
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};