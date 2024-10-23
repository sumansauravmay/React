1. npm inti -y

2. npm install react react-dom

3. install webpack packages:

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin webpack-merge

4. install babel packages:

npm install --save-dev @babel/core babel-loader @babel/preset-react

5. create a .babelrc file in the root directary and add:

{
    "presets": [
      ["@babel/preset-react", {
        "runtime" : "automatic"
      }]
    ]
  }

6. create a webpack.config.js file in the root directary and add:

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
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

7. create a webpack.dev.js in the root directary:

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

8. create a webpack.prod.js file in the root directary:

const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});

9. Create a src directory in the project root. This will hold your React code.
10. Inside the src folder, create two files: index.html, index.js and App.js.

11. In src/index.html, add the following basic HTML structure:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack, Babel, and parcel</title>
</head>
<body>
    <div id="root"></div>
    
    <!-- to use parcel add script tag-->
     <script src="./index.js"></script>
</body>
</html>


12. In src/index.js, write a simple React component and render it:

import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";


const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<App/>, document.getElementById("root"))

13. in src/App.js, write code:

import React from 'react'

const App = () => {
  return (
    <h1>
      Hello Suman Saurav!
    </h1>
  )
}
export default App;


14. run react app using webpack commands:

npx webpack serve --config webpack.dev.js
npx webpack --config webpack.dev.js

npx webpack --config webpack.prod.js

or


add the below code in the package.json in the script section

{
   "start": "webpack serve --config webpack.dev.js",
   "build": "webpack --config webpack.prod.js"
}

15. we can also use percel

a. npm install --save-dev parcel-bundler 
 to run this write 
 
 npx parcel index.html



b. for the production level, run the command

npx parcel build index.html


