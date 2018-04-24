var merge = require('webpack-merge')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpack = require('clean-webpack-plugin')
var ExtractWebpack = require('extract-text-webpack-plugin')
var path = require('path')

var baseConfig = {
    entry: {
        react: ['react'],

    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                //css...
            }
        ]
    },

    plugins: [
        new CleanWebpack(path.resolve(__dirname, 'dist')),

        // 提取公用代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            minChunks: Infinity
        })
    ]
}

var generatePage = function ({
    title = '',
    entry = '',
    template = './src/index.html',
    name = '',
    chunks = []
} = {}) {
    return {
        entry,
        plugins: [
            new HtmlWebpackPlugin({
                chunks,
                template,
                filename: name + '.html'
            })
        ]
    }
}

const pages = [
    generatePage({
        title: 'page A',
        entry: {
            a: './src/pages/a'
        },
        name: 'a',
        // react 是公用代码
        // a 是自己的业务逻辑模块
        chunks: ['react', 'a']
    }),
    generatePage({
        title: 'page B',
        entry: {
            b: './src/pages/b'
        },
        name: 'b',
        // react 是公用代码
        // a 是自己的业务逻辑模块
        chunks: ['react', 'b']
    })
]

// merge 基础配置

// 多页面单配置
merge([baseConfig].concat(pages))

// 多页面多配置
module.exports = pages.map(page => merge(baseConfig, page))