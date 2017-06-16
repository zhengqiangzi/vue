var webpack=require("webpack")
module.exports={

	entry:{index:"./index.js"}
	,
	output:{
		filename:"bundle.js",
		path:"/dist",
		publicPath:"/dist"

	},
	resolve: {
			alias: {
				'vue$': 'vue/dist/vue.common.js'
			},
		},
	module:{
		rules:[
			 {
				test: /\.vue$/,
		       	 use: [
		         	 "babel-loader",
		         	 "vue-loader",
		        	]
		      },
		      {
				test: /\.js/,
		       	 use: [
		         	 "babel-loader",
		        	]
		      }
		]
	},
	plugins:[

		new webpack.HotModuleReplacementPlugin()
	],
   devServer:{

      hot:true,

      inline:true,

      proxy:{

        //'*':"http://192.168.0.43:8078"

      },

      port:8078,

      host:'127.0.0.1'

   }
}