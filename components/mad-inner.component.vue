<template>
	<div>
		<input type="text" v-model.number="test">
		<div v-clound>inner</div>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				test:1
			}
		},
		directives:{
			clound:function(){
				console.log('clound')
			}

		}


	}

</script>

<style>
	

</style>