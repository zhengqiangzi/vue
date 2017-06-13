import    Vue          from     'vue';
import    Vuex         from     'vuex'

import _ from "lodash"

Vue.use(Vuex)


var moduleA={

	namespaced:true,
	state:{
			num:1
	},
	mutations:{

		add:function(state){
			//console.log('moduleA add()')

			++state.num
		},
		subsc:function(state){
			//console.log('moduleA subsc()')

			--state.num
		}
	},
	actions:{

		addDelay:function(conext){


			setTimeout(function(){

				conext.commit("add")

			},1000)

		},

		subscDelay:function(conext){

			setTimeout(function(){

				conext.commit("subsc")
			},1000)
		}

	},
	getters:{

			doubleNumber:function(state){


				return state.num*2
			}

	},

	modules:{

		state:{
				g:1
		}


	}


}

var moduleB={
	namespaced:true,

	state:{
			num:11
	},
	mutations:{

		add:function(state){

			///console.log('moduleB Add()')
			++state.num
		},
		subsc:function(state){
			//console.log('moduleB subsc()')
			--state.num
		},
		setNumber:function(state,data){

				state.num=data.data

		}
	},
	actions:{

		addDelay:function(conext){


			setTimeout(function(){

				conext.commit("add")

			},1000)

		},

		subscDelay:function(conext){

			setTimeout(function(){

				conext.commit("subsc")
			},1000)
		}

	},

	getters:{

		doubleNumber:function(state){

			return state.num*2
		}

	}
	


}
 export const store=new Vuex.Store({

 	modules:{

 		pageA:moduleA,
 		pageB:moduleB

 	}


 })

//export  const sqrt = Math.sqrt;
