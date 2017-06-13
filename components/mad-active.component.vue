<template>
		<div>



				<h3>
					
					{{num}}

					<br/>

					{{ $store.getters["pageA/doubleNumber"] }}

				</h3>

				<button class='btn btn-success' @click="$store.commit('pageA/subsc')">-</button>
			
				<button class='btn btn-success' @click="$store.commit('pageA/add')">+</button>


				<button class='btn btn-success' @click="$store.dispatch('pageA/subscDelay')">- delay(1s)</button>
			
				<button class='btn btn-success'  @click="$store.dispatch('pageA/addDelay')">+ delay(1s)</button>

				
				<hr/>
					


<!-- 				{{$store.getters["pageB/doubleNumber"]}}
 -->
				{{message}}
				<br>

				<input type="text" v-model.trim="message" v-focus.keyup="'aaa'" />
				

				{{now()}}


				<mad-inner></mad-inner>

		

		</div>
</template>

<script>
	
	export default {
		data:function(){
			return {
			}
		},
		components:{

				"mad-inner":require("./mad-inner.component.vue")

		},
		directives:{
			"focus":function(el,binding){
				console.log(arguments);
			}
		},
		computed:{
			num:function(){
				return this.$store.state.pageA.num;
			},
			doubleNumber:function(){
				return 1
			},
			message:{
				get:function(){
					return this.$store.state.pageB.num;
				},
				set:function(value){
					this.$store.commit({type:"pageB/setNumber",data:value});
				}
			}
		},
		methods:{
			now:function(){
				return new Date()
			}
		}
	}

</script>

<style scoped>
	

</style>