module.exports = {
  entry:'./main.js',
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader',
        exclude: '/node_modules/',
      }
    ]
  }
}