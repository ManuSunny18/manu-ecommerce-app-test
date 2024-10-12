import { merge } from 'webpack-merge'
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
import commonConfig from "./webpack.common"

const config = (envVars) => {
  return merge(
    commonConfig,
    {
      mode:'production',
      output:{
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        clean: true, 
      },
      plugins:[
        ...(envVars?.analyze ? [new BundleAnalyzerPlugin()]:[])
      ],
      module:{
        rules:[
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('babel-loader'),
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'assets/images/[name].[hash:8].[ext]',
                },
              },
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
          }
        ]
      },
      optimization:{
        minimize:true,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            react:{
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
              name: 'react',
            },
            framer:{
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
            },
          },
         },
         minimizer: [
          new TerserPlugin(),
        ],
      },
    }
  )
}
export default config