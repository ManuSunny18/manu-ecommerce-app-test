import { merge } from 'webpack-merge'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import commonConfig from "./webpack.common"
const devServer: DevServerConfiguration = {
  hot: true,
  port: 3000,
  historyApiFallback: true,
};

const config = merge(
  commonConfig,
  {
    mode:'development',
    devServer,
    output:{
      filename: 'index.js',
    },
    plugins:[
      new ReactRefreshWebpackPlugin()
    ],
    module:{
      rules:[
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                plugins: [
                  require.resolve('react-refresh/babel'),
                ],
              },
            },
          ],
        },
      ]
    }
    
  }
)
export default config;