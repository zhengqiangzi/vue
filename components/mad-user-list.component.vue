<template>
	
	<div>
	<table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>userName</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in users">
         
          <td>{{index+1}}</td>
          <td>{{item.username}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.address}}</td>
        </tr>
       
      </tbody>
    </table>


	</div>



</template>

<script>

	import { mapState } from 'vuex';


	export default {


		computed:mapState({
			
				users:(state)=>state.users

			})
		
	}

</script>

<style>
	

</style>