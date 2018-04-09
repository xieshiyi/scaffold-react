const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const os = require('os')

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/app/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {     
        extensions: [ // 自动解析确定的扩展,能够使用户在引入模块时不带扩展,默认值为：[".js", ".json"]
            ".js", ".jsx"
        ],
        alias: {     // 创建 import 或 require 的别名，来确保模块引入变得更简单
            '@comp': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@DB': path.resolve(__dirname, './src/db'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ],
                exclude: /node_modules/
            }, {
                test: /\.(css|scss)/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                {
                    loader:'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }
                ],

            },
        ]
    },
    // webpack 可以监听文件变化，当它们修改后会重新编译。这个页面介绍了如何启用这个功能，以及当 watch 无法正常运行的时候你可以做的一些调整。
    watch: true,
    watchOptions:{
        ignored: /node_modules/,
    },
    devServer: {                    //配置此静态文件服务器，可以用来预览打包后项目
        host:'localhost',
        port: 8084,                 //设置默认监听端口，如果省略，默认为8080
        historyApiFallback: true,   //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true,                  //是否热部署
        quiet: false,               //让dev server处于静默的状态启动
        compress: true,             //开发服务器是否启动gzip等压缩
        stats: {
            colors: true,           // color is life
            chunks: false,          // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        },
        proxy: {
            "/api": {
                target: "http://localhost:8080/"
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
            __LOCAL__: true,
            __TEST__: false,
            __PRO__: false
        }),
        new HtmlWebpackPlugin({                         //生成模板文件
            template: './index.html',
            filename: 'index.html',
            chunks: ['app','vendor'],
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
            //   ecma: 8,
              // warnings: false,
              // parse: {
              //   ecma: true
              // },
              compress: {
                drop_debugger:true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            //   mangle: {
            //     // ...options,
            //     properties: {
            //       // mangle property options
            //     }
            //   },
              output: {
                comments: false,
                beautify: false,
                quote_style: 0,
                semicolons: false
                // ...options
              },
              toplevel: false,
              // nameCache: null,
              ie8: false,
            //   keep_classnames: undefined,
            //   keep_fnames: false,
              safari10: false,
            }
          })
        // new webpack.DllReferencePlugin({
        //     manifest: require(path.join(__dirname, 'dist', 'common.manifest.json')),
        // })
    ]
}
