import    Vue          from     'vue';
import    Vuex         from     'vuex'

Vue.use(Vuex)

 export const store=new Vuex.Store({

	state:{

		users:[

/*			{username:"johnny",age:22,sex:1,address:"shanghai"},
*/		
		]


	},
	mutations:{

		adduser:function(state,data){

				state.users.push(data.data)
		}


	},
	getters:{

		userlen:function(state){

			return state.users.length
		}

	}


})

//export  const sqrt = Math.sqrt;
