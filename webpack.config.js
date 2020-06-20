const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('src/app/index.js'),
  output: {
    path: path.resolve('src/public'),
    filename: 'bundle.js',
  },
};
