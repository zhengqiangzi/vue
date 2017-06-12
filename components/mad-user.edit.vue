<template>
	
 <form v-if="currentUser">
        <div class="form-group">
          <label for="exampleInputEmail1">UserName</label>
          <input type="text" class="form-control"  placeholder="Your name" v-model="currentUser.username">
        </div>
      

        <div class="form-group">
          <label for="age">age</label>
          <input type="number" class="form-control" v-model="currentUser.age" placeholder="Your Age">
        </div>
      
        
        <div class="form-group">
          <label class="radio-inline">
             <input type="radio" name="sex" value="1" v-model="currentUser.sex"> Man
          </label>

          <label class="radio-inline">
             <input type="radio" name="sex" value="2" v-model="currentUser.sex"> Woman
          </label>
          </div>


        <div class="form-group">
          <label for="exampleInputEmail1">Address</label>
          <input type="text" class="form-control"  placeholder="Your Address" v-model="currentUser.address">
        </div>


        <button type="submit" class="btn btn-default" @click.prevent="saveHandler()">Submit</button>
   </form>
</template>

<script>
	

export default {


  data:function(){


      return {

      }
  },

  computed:{

      currentUser:function(){

          return this.$store.state.editUser
      }

  },
  methods:{

      saveHandler:function(){

        this.$store.commit({type:"saveCurrentUser",data:this.currentUser})

        this.$router.go(-1)
      }
  },

  created:function(){

       this.$store.commit({type:"getEditUser",data:this.$route.params.id})


  },
  beforeRouteEnter:function(to,from,next){

      next(true)
      /* this.$store.dispatch("loadServerData").then(function(){
          console.log(arguments);
       })*/
    }

}


</script>

<style>
	


</style>