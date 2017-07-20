<template>
		
		<div>
			
			<input type="text" v-model="txt" @input="inputHandler"/>
		</div>
	
</template>

<script>
	
	export default {

		inject:["user"],
		data:function(){
			return {

				txt:this.user.username
			}
		},

		computed:{

			/*txt:function(){

				return this.user.username
			}*/
		},
		methods:{

			inputHandler:function(){
				this.user.username=this.txt;
			}
		}


	}

</script>

<style>
	

</style>