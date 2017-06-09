<template>
		
		<div class='footer'>
			
				{{info}}－当前成员数量:[{{len}}]
	
		</div>


</template>

<script>
		import { mapGetters } from 'vuex';

		export default {

			data:function(){

				return {
					
					info:"copy right @2017"
				}
			},
			computed:mapGetters({

				len:'userlen'
			})
		}


</script>

<style scope>
		.footer{

				width: 100%;
				height:50px;
				background-color: #000;
				color:#fff;
				display: flex;
				align-items: center;
				margin-top:50px;
	

		}

</style>