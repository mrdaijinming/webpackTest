
webpack作用：
一切都是模块化（js,css,图片等）
一个模块加载器，打包工具

安装webpack:
流程：
1.安装webpack命令环境
 	cnpm install webpack -g
 	验证ok?
 		webpack --version


 2.package.json 工程文件（需要依赖模块，库描述，版本，作者。。。）
npm init
 3.安装本地webpack
 	cnpm install webpack -D 相当于 --dev


例子：
index.html 页面 
entry.js. 入口文件（编写需要的代码）

终端操作:webpack entry.js bundle.js
-------------------
自动解决依赖
	默认支持commonJs规范
----------------
webpack默认只支持javascript文件
*需要用加载器（loader）
loader类似一种转化器，它可以把一个东西，转成另一个
-----------------
css文件：
	style-loader
	css-loader

下载：
	npm install style-loader css-loader -D
注意：
	在webpack中，多个loader加载，用！连接
---------------
配置 webpack.config.js
作用：配置一些webpack需要入口中
	最好用这个 

终端 webpack
	webpack 开发环境下编译（打包 ）
	webpack -p 生产环境下编译 （压缩）
	webpack -w 监听文件改动，自动编译（速度快）
	webpack -d 开启(生成)source maps （F12 source里面可以看到打包前的文件，方便调试）

	webpack -wdp

-----------------
ES6->babel转化 （转化编译后就可以使用ES6的语法）

babel使用 ：
	npm install babel-loader babel-core babel-preset-es2015 -D
	模块定义：
	export default {}
	引入模块：
	import 名字 from 模块名
	配置babel预设：
	1.webpack.config.js
	 babel{
    		"presets":['es2015']
    	}
    	2.baberc 配置
   -----------------------------
   webpack-dev-server (webpack服务)
