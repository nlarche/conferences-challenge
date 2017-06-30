import autoprefixer from 'autoprefixer';

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [autoprefixer],
  },
};

const styleLoader = ['style-loader', 'css-loader', postCssLoader];

export default {
  entry: {
    bundle: './app',
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader'] },
      { test: /\.html$/, use: 'raw-loader' },
      { test: /\.css$/, loader: styleLoader },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001/',
      },
    },
  },
};
