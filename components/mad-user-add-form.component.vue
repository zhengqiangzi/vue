<template>
	
	<form>
		  <div class="form-group">
		    <label for="exampleInputEmail1">UserName</label>
		    <input type="text" class="form-control"  placeholder="Your name" v-model="user.username">
		  </div>
		

		  <div class="form-group">
		    <label for="age">age</label>
		    <input type="number" class="form-control" v-model="user.age" placeholder="Your Age">
		  </div>
		
		 	
		  <div class="form-group">
				<label class="radio-inline">
					 <input type="radio" name="sex" value="1" v-model="user.sex"> Man
				</label>

				<label class="radio-inline">
					 <input type="radio" name="sex" value="2" v-model="user.sex"> Woman
				</label>
  			</div>


		  <div class="form-group">
		    <label for="exampleInputEmail1">Address</label>
		    <input type="text" class="form-control"  placeholder="Your Address" v-model="user.address">
		  </div>


		  <button type="submit" class="btn btn-default" @click.prevent="addUserHandler()">Submit</button>
	</form>



</template>

<script>
	
	import { mapMutations  } from 'vuex'

	export default {

		data:function(){
			return {
				user:{
					username:"",
					age:18,
					sex:1,
					address:""
				}
			}
			

		},
		methods:{
			addUserHandler:function(){

					this.$store.commit({type:"adduser",data:Object.assign({},this.user,{id:new Date().valueOf()})})
					this.$router.go(-1)

				}
		

		}

		
		
	}

</script>

<style>
	

</style>