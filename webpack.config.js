const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ccpa-string-builder.js',
    library: 'CCPAStringBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
}
