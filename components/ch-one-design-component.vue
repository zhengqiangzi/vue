<template>
	<div class="one-design">
		<div class="one-design-image">
			<img :src="this.src"/>
		</div>
		<div class="one-design-title">{{this.title}}</div>
	</div>
</template>

<script>
	export default {

		props:{
			pic:{
				type:String,
				required:true,
			},
			title:{

				type:String,
				default:"...."
			}
		},
		computed:{

			src:function(){

				return this.pic
			},
			desc:function(){

				return this.title
			}
		}

	}

</script>

<style>
	
	.one-design{

		width: 100%;
		border:1px solid rgba(120,120,120,.6);
		border-radius: 10px;
		overflow: hidden;
		padding:10px 5px 10px 5px;


	}
	.one-design-image{

		width: 100%;
		max-height:140px;
		min-height: 80px;
		overflow: hidden;
	}
	.one-design-title{
		width: 100%;
		height: 20px;
		margin-top:10px;
	}

</style>