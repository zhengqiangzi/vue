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
		      },
		       {
				test: /\.css/,
		       	 use: [
		         	 "style-loader","css-loader",
		        	]
		      },
		      {
      		 	 test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
		       	 use: [
		         	 "file-loader",
		        	]
		      },
		      {
       			 test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
		       	 use: [
		         	 "file-loader",
		        	]
		      }
		]
	}


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