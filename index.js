window.$=window.jQuery=require("jquery");
require("bootstrap");
import VueForm from 'vue-form';
import Vue from 'vue';

Vue.use(VueForm,{
  validators:{

    server:function(value,attrs){
   
     return $.get(attrs,{data:value,method:'POST'})/*then(function(){


     })
      return {result:false,msg:"serverError"}*/
    }
  }

});
var app = new Vue({

  el: '#app',
  
  data:{
    formstate:{

    },
    model:{
        name:null,
        name2:null
    }
  },
  methods:{

    onSubmit:function(){
      
    }
  }
 

})
