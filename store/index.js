import    Vue          from     'vue';
import    Vuex         from     'vuex'

import _ from "lodash"

Vue.use(Vuex)

 export const store=new Vuex.Store({

	state:{

		users:[

		
		],
		currentUser:null,
		editUser:null


	},
	mutations:{

		adduser:function(state,data){

				state.users.push(data.data)
		},
		deleteUser:function(state,id){

			var did=id.data.id

			var index=_.findIndex(state.users,{id:did});

			state.users.splice( index, 1 )

			if( state.currentUser )
			{
				if( did==state.currentUser.id ){
					state.currentUser=null
				}
			}





		},
		setCurrentUser:function(state,currentUser){

			state.currentUser=Object.assign({},currentUser.data)
		},
		saveCurrentUser:function(state,data){

			var index=_.findIndex(state.users,{id:data.data.id});

			if(index<0){

				return;
			} 
			state.users.splice(index,1,Object.assign({},data.data));


		},
		addServerData:function(state,data){


			for(var i=0;i<data.data.length;i++){

				state.users.push(data.data[i])
			}

		},
		getEditUser:function(state,data){
			
			var index=_.findIndex(state.users,{id:Number(data.data)});

			state.editUser=Object.assign({},state.users[index])

		}


	},
	getters:{

		userlen:function(state){

			return state.users.length
		}

	},
	actions:{

		loadServerData(context){

			var promise=$.get("./mockData/users.json")

			promise.then(function(data){

				context.commit({type:"addServerData",data:data})
			})

			return promise;

		}
	}


})

//export  const sqrt = Math.sqrt;
