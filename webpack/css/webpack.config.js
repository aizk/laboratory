var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        index: './src/app.js'
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 后面添加的先处理数据流
                use: ExtractTextPlugin.extract({
                    // 不提取时如何加载样式到页面中
                    fallback: {
                        loader: 'style-loader'
                    },
                    use: [
                        // import 工作
                        {
                            loader: `css-loader`,
                            options: {
                                // 加载时的别名
                                // alias
                                // importLoader
                                // 压缩
                                Minimize: true,
                                // modules 是否启用 css-modules
                            }
                        }
                    ]
                })



            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            // 指定提取 css 的范围，true 提取所有引入的 css
            // false 只提取同步加载的
            allChunks: false,
        })
    ]
};