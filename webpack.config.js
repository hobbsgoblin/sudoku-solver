module.exports = {
  entry: './src/solver.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'solver.js',
    library: "solver",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map'
};
