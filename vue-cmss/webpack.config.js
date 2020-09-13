const path = require('path')
// const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),//入口文件
    output:{
        path:path.join(__dirname,'./mui'),
        filename:'bundle.js'
    },
    // devServer: {//配置dev-server命令参数的第二中方式
    //     //--open --port 3030  --contentBase src --hot
    //     open:true,
    //     port:3030,
    //     contentBase:src,
    //     hot:true //启用热更新  第一步，第二步 const webpack = require('webpack')
    //
    // },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
        new htmlWebpackPlugin({//指定模板页面，用于生成内存中的页面
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html' // 内存中页面的名称npm
        }),
        new VueLoaderPlugin()
    ],
    module: {
        //用于配置所有第三方模块加载器
        rules:[//匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //limit 名称固定，为图片的大小，如果大于等于图片大小，就不转为base64，小于则转，同时想要保持原文件名
            //添加name属性
            // {test:/\.(jpg|png|gif|bmp|jpeg)/,use:'url-loader?limit=4195&name=[name].[ext]'}
            //为防止重名后文件被替换为题，做如下处理
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=4195&name=[hash:0]-[name].[ext]'},
            {test:/\.(ttf|eot|avg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    // resolve:{
    //     alias:{
    //         // "vue$":"vue/mui/vue.js"
    //     }
    // }y
}

