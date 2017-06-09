<template>
	 <div class="container-fluid" >
		
		<div class="row">
			

				<mad-user-list class="col-sm-6"></mad-user-list>	
				<mad-user-add  class="col-sm-6"></mad-user-add>
		</div>
									
	</div>

</template>

<script>
	


	export default {


		components:{

			"mad-user-list":require("./mad-user-list.component.vue"),
			"mad-user-add":require("./mad-user-add-form.component.vue")
		}

	}
</script>


<style>
	


</style>

