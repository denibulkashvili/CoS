module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: './dist',
  }
}