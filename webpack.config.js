module.exports = {
  entry: './src/sudoku-solver.js',
  output: {
    filename: 'sudoku-sudoku-solver.js',
    library: "sudoku-solver",
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
