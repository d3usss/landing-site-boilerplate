exports.loadStaticFiles = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico|txt|webmanifest)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
});

exports.devServer = () => ({
  devServer: {
    compress: true,
    port: 9000,
  },
});
