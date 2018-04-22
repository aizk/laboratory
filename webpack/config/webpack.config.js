const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './index.js',
    // 多入口
    entry: ['index.js', 'vendor.js'],
    // 这种配置方式每个入口文件有一个 key 即 chunk
    entry: {
      index: './index.js',
      vendor: ['x.js', 'y.js', 'lodash'],
    },
    // 一个输出
    output: {
        filename: 'bundle.js',
        publicPath: './dist',
        path: path.resolve(__dirname, 'dist'),
    },
    // 多个输出 [name] 对应 index 和 vendor 这两个 key
    output: {
        filename: '[name].min.[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            // 配置 Babel
            // 在 .babelrc 指定 presets
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            // 指定 presets，一般在 .babelrc 指定
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['babel-preset-env', {
                                targets: {
                                    browsers: [' > 1%']
                                }
                            }]
                        ]
                    }
                },
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.SplitChunksPlugin({
            // name 或 names 公用代码的名称
            name: 'common',
            // filename
            // minChunks 出现多少次才提取
            minChunks: 2,
            // chunks 提取范围
            // children 是否在子模块中查找
            // deepChildren
            // async 创建异步代码块
        })
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // 指定哪个入口的文件被打包，默认是所有
            chunk: ['vendor'],
            minify: {
                collapseWhiteSpace: true,
            }
        })

    ]
}