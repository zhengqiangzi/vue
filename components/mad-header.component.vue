<template>
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">MadHouse MadMax</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li><a href="javascript:void(0)" @click.once="loadDataHandler">load Data</a></li>
	        <li><router-link to="/list">user list</router-link></li>
	        <li><router-link to="/add">add user</router-link></li>
	      </ul>


	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
</template>

<script>

import { mapActions } from 'vuex';

export default	{

	data:function(){

		return {


		}
	},
	methods:{
	/*	...mapActions({
			loadDataHandler:"loadServerData"
		})*/
		loadDataHandler:function(){
			//$store.dispatch返回的是始终是一个Promise 即使你不直接返回一个Promise
			this.$store.dispatch("loadServerData").then(function(data){

				//console.log(data)
			})

		}
	}
	



}

</script>

<style>
	

</style>