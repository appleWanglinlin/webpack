const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js', //设置入口起点
  output: { //设置出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
  //如果使用在配置文件中设置hot,则需要这一步，hot不会更新整个，更新修改的部分
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: "index.html"
    })
  ],
  mode: 'development', //设置模式，默认为production，会压缩，设置为development则不会压缩
  devServer: {
    // contentBase: path.join(__dirname, './src'),//设置打开页面时的根路径
    compress: true, //是否打包
    port: 3000, //设置端口号为3000，默认为8080
    open: true //自动打开http://localhost:3000/
    // host: '0.0.0.0'使服务器外部可访问，例如手机可以访问
  }
};