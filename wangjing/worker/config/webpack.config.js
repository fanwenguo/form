var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var UglifyJsPlugin=require('uglifyjs-webpack-plugin');
module.exports={
	entry:path.join(__dirname,'../src/main.js'),
	output:{
		path:path.join(__dirname,"../dist"),
		filename:'[name].js'
	},
	plugins:[
		new UglifyJsPlugin(),
		new htmlWebpackPlugin({
			template:path.join(__dirname,'../src/index.html'),
			filename:'index.html'
		})
	],
	resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
	},
	module:{
		rules:[
		   {
			   test:/\.js$/,
			   use:[{
				   loader:"babel-loader",
					options:{
						presets:[
							'env'
						]
					}	
			   
			   }
			   ]
		   },
		   {
			   test:/\.css$/,
			   use:['style-loader','css-loader']
		   },
		   {
			   test:/\.vue$/,
			   use:['vue-loader']
		   },
		   {
			   test:/\.(png|jpg|gif)$/,
			   use:'url-loader'
		   }
		]
	},
	devServer:{
		contentBase:path.join(__dirname,'../dist'),
		host:'localhost',
		port:8000,
		open:true
	}
}