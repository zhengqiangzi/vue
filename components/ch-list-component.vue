<template>

	<div class="container-fluid">

		


		<div class="row list">
			<div class="col-xs-12 one-item" v-for="item in list">
				<one-design :pic="item.pic" :title="item.title"></one-design>
			</div>	
		</div>

	</div>

</template>

<script>

	import oneDesign from './ch-one-design-component.vue';
	import _ from "lodash";

	export default {	

		data:function(){

			return {

			
				id:null
			}

		},

		computed:{

			list:function(){

				if(!this.id) return []
					let _return=[]

				for(var prop in this.$store.state.info){

					if(this.$store.state.info[prop].id==this.id){
						_return=this.$store.state.info[prop].data
					}
				}
				return _return
			}

		},

		components:{

			"one-design":oneDesign
		},

		mounted:function(){

				this.id=this.$route.params.id
		},
		watch:{

			"$route":function(){

				this.id=this.$route.params.id
			}

		}
/*		updated:function(){

			
			console.log(123)
		}*/

	}

</script>

<style>

	.one-item{
		margin-top:10px;
	}

</style>