<template>
	
	<div :class="{'shower':value,'vc':true}">show me please!   {{ nv }}</div>

</template>

<script>
	
	export default {

		props:["value"],

		data:function(){

			return {


			}
		},
		computed:{

			nv:function(){

					console.log(this.value)

					return !this.value
			}

		}


	}
</script>

<style scoped>
		
		.vc{
				display:none;
		}
		.vc.shower{
				display:block;
		}
		
</style>