1. npm inti -y

2. npm install react react-dom

3. install webpack packages
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin webpack-merge

4. install babel packages
npm install --save-dev @babel/core babel-loader @babel/preset-react

5. create a .babelrc file in the root directary and add

{
    "presets": [
      ["@babel/preset-react", {
        "runtime" : "automatic"
      }]
    ]
  }

6. create a webpack.config.js file in the root directary and add

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
};

7. create a webpack.dev.js in the root directary

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
});

8. create a webpack.prod.js file in the root directary

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});

9. run react app using webpack commands:

npx webpack serve --config webpack.dev.js
npx webpack --config webpack.prod.js





