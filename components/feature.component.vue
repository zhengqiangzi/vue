<template>
		<div>
			<span v-for="item in _user ">{{item}}   |  </span>
		</div>

</template>
<script>
	
	export default {


		inject:["user"],

		data:function(){
			return {}
		},
		methods:{


		},
		computed:{

				_user:function(){return this.user}


		},
		created:function(){

			//this.user.username=
		}



	}



</script>

<style>
	


</style>