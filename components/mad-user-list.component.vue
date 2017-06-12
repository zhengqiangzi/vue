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
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in users" @click="selectOne(item)">
         
          <td>{{item.id}}</td>
          <td>{{item.username}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex | sex}}</td>
          <td>{{item.address}}</td>
          <td>
               <a href="javascript:void(0)" @click.stop.prevent="deleteHandler(item)">删除</a>&nbsp;|&nbsp;
                <router-link :to="'edit'+'/'+item.id ">编辑</router-link>
          </td>
        </tr>
       
      </tbody>
    </table>


   

	</div>



</template>

<script>

	import { mapState } from 'vuex';


	export default {

    data:function(){


      return {


      }
    },

		computed:mapState({
			
				users:(state)=>state.users,
        currentUser:(state)=>state.currentUser
			}),
    methods:{

        deleteHandler:function(index){

          this.$store.commit({type:"deleteUser",data:index})
        },
        selectOne:function(item){

          this.$store.commit({type:"setCurrentUser",data:item})

        },
        saveHandler(){

          this.$store.commit({type:"saveCurrentUser",data:this.currentUser})

        }
    },
    filters:{

      sex:function(v){
        return v==1? '男':'女'
      }
    }
		
	}

</script>

<style>
	

</style>