var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {

};

module.exports = [
    {
        name: 'server',
        entry: './app.js',
        target: 'node',
        output: {
            path: __dirname + '/dist/server',
            filename: 'bundle.js',
        },
    },
    {
        name: 'client',
        entry: './client.js',
        target: 'web', 
        output: {
            path: __dirname + '/dist/client',
            filename: 'bundle.js',
        },
        resolve: {
            modules: [
              'node_modules'
            ],
            extensions: ['.js', '.jsx'],
          },
    }
];