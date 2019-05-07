const MiniCssExtractPugin = require('mini-css-extract-plugin');

module.exports = () => ({
  output: {
    filename: 'bundle.[chunkhash:4].js',
    // publicPath: '/dist/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie >= 11'],
                }),
                require('cssnano')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie >= 11'],
                }),
                require('cssnano')(),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'img-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPugin(
      {
        filename: '[name].[hash].css',
      }
    ),
  ],
});
