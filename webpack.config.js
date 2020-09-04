const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/ccpa-string-builder.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ccpa-string-builder.js',
    library: 'CCPAStringBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
}
