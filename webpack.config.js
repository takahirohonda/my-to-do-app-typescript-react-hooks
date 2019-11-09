const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: './src/Index.tsx',
    output: {
      path: path.join(__dirname, '../mydatahack.github.io/mtd'),
      filename: 'default.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
      inline: true,
      contentBase: './public',
      historyApiFallback: true,
      port: 3000
    },
    devtool: false,
    optimization: {
      minimizer: [
        //
        new TerserPlugin({
          parallel: true,
          sourceMap: true, // Must be set to true if using source-maps in production
          exclude: /\.min\.js$/i,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            // using default options
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.svg$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({ filename: './style/app.css' }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      new CopyWebpackPlugin([
        { from: 'public/manifest.json', to: 'manifest.json' },
        { from: 'public/img', to: 'img' },
        { from: 'public/sw.js', to: 'sw.js' }
      ])
    ]
  }
}