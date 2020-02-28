const path = require('path')
// 启用热更新的 第2步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')



// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
  // 在配置文件中，手动指定 入口 和 出口
  // entry，入口，表示要使用 webpack 打包哪个文件
  entry: path.join(__dirname, './src/main.js'),
  output: { // 输出文件相关的配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  plugins: [ // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
    new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
      filename: 'index.html' // 指定生成的页面的名称
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
      }, {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, // 处理 .vue 文件的 loader

    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.js"
    }
  },
  devServer: {
    proxy: {
      '/ju': {
        //设置调用的接口域名和端口号，别忘了加http
        target: 'http://v.juhe.cn/toutiao',
        changeOrigin: true,
        pathRewrite: {
          //用/ju代替target里面的url,后面发送请求时，直接用ju
          '^/ju': ''
        }
      },
      '/mo': {
        //设置调用的接口域名和端口号，别忘了加http
        target: 'http://api.douban.com/v2/movie',
        changeOrigin: true,
        pathRewrite: {
          //用/ju代替target里面的url,后面发送请求时，直接用ju
          '^/mo': ''
        }
      }
    }
  }
}

// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；