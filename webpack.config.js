module.exports = {
    entry: './entry.js', //入口文件
    output: {
        filename: 'bundle.js' //出口
    },
    devtool:'source-map',//直接生成 source-map
    module: {
        loaders: [
            { test: /\.css$/,
             loader: 'style!css'
         },{
         	test:/\.js$/,
         	loader:'babel'
         	exclude:/node_modules/   //排除这个目录里的js 是不走babel编译的
         }
        ]
    },
    babel{
    	"presets":['es2015']// babel的预设是presets，presets的预设是es2015
    }
}
