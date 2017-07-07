var path=require("path")
var p=path.resolve()

module.exports={

	entry:{
		index:"./index.js"

	},
	output:{
		filename:"index.js",
		path:p+"/dist/"

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
/*   devServer:{

      hot:true,

      inline:true,

      proxy:{

        //'*':"http://192.168.0.43:8078"

      },

      port:8078,

      host:'127.0.0.1'

   },*/
}