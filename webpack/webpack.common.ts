import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const ESLintPlugin = require('eslint-webpack-plugin');

// define plugins
const plugins: webpack.WebpackPluginInstance[] = [
  new HTMLWebpackPlugin({
    template: './public/index.html', // you have to have the template file
  }),
  //generating the css files seperate
  new MiniCssExtractPlugin({
    filename:"[name].[contenthash:12].css"
  }),
  new ESLintPlugin()
];

const config: webpack.Configuration = {
  entry: path.resolve(__dirname,'../src/index.tsx'), // codes will be inside src folder
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    // more configurations: https://webpack.js.org/configuration/
  },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    // automatically resolve certain extensions (Ex. import './file' will automatically look for file.js)
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      // absolute path importing files
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@common': path.resolve(__dirname, '../src/common'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@types': path.resolve(__dirname, '../src/types'),
    },
  },
  module: {
    rules: [
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.scss$/, // Process .scss files with "sass-loader", "css-loader", "postcss-loader", and "MiniCssExtractPlugin".
          use: [
            MiniCssExtractPlugin.loader, // Extract CSS into separate files for production build.
            "css-loader", // Translates CSS into CommonJS.
            "postcss-loader", // PostCSS is used for autoprefixing CSS for better cross-browser support.
            "sass-loader", // Compiles SCSS to CSS.
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[hash:8].[ext]',
              },
            },
            /*
              Image loading and optimising process, need to play with the values for the optimised result
            */
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
  },
  
};
export default config;