import    Vue          from     'vue';
import    Vuex         from     'vuex'

import _ from "lodash"

let _json={

	"type1":{
		"title":"HTML5案例",
		"id":1,
		"icon":"glyphicon-heart",
		"data":[
			{"pic":"image/ad1.jpg","title":"广告创意一","id":1},
			{"pic":"image/ad2.jpg","title":"广告创意二","id":2},
			{"pic":"image/ad3.jpg","title":"广告创意三","id":3},
			{"pic":"image/ad4.jpg","title":"广告创意四","id":4},
			{"pic":"image/ad5.jpg","title":"广告创意五","id":5},
			{"pic":"image/ad6.jpg","title":"广告创意六","id":6}
		]
	},
	"type2":{
		"title":"HTML5动效",
		"id":2,
		"icon":"glyphicon-fire",
		"data":[
			{"pic":"image/ad1.jpg","title":"广告创意一","id":1},
			{"pic":"image/ad2.jpg","title":"广告创意二","id":2},
		]
	},
	"type3":{
		"title":"HTML5声音",
		"id":3,
		"icon":"glyphicon-send",
		"data":[
			{"pic":"image/ad4.jpg","title":"广告创意四","id":4},
			{"pic":"image/ad5.jpg","title":"广告创意五","id":5},
			{"pic":"image/ad6.jpg","title":"广告创意六","id":6}
		]
	},
	"type4":{
		"title":"内容/视频",
		"id":4,
		"icon":"glyphicon-baby-formula",
		"data":[
			{"pic":"image/ad4.jpg","title":"广告创意四","id":4},
			{"pic":"image/ad5.jpg","title":"广告创意五","id":5},
			{"pic":"image/ad6.jpg","title":"广告创意六","id":6}
		]
	},
	"type5":{
		"title":"行业素材库",
		"id":5,
		"icon":"glyphicon-object-align-top",
		"data":[
			{"pic":"image/ad3.jpg","title":"广告创意三","id":3},
			{"pic":"image/ad4.jpg","title":"广告创意四","id":4},
			{"pic":"image/ad5.jpg","title":"广告创意五","id":5},
			{"pic":"image/ad6.jpg","title":"广告创意六","id":6}
		]
	},



}
Vue.use(Vuex)

 export const store=new Vuex.Store({

	state:{

		info:_json


	},
	mutations:{

		


	},

	getters:{

	

	},

	actions:{

		
	}


})

//export  const sqrt = Math.sqrt;
