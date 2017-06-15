window.$=window.jQuery=require("jquery");
require("bootstrap");
import  VueRouter       from           'vue-router';
import  { router}       from           './router';
import { store }        from           './store';
var Vue=require("vue")


var app = new Vue({

  el: '#app',
  store:store,
  data:{
  
  },
  components:{
    "mad-active":require("./components/mad-active.component.vue"),
  	"mad-func":require("./components/functional.component.vue"),
  },
  methods:{

    updateHandler:function(){

      //console.log(123)
    }
  
  },
  directives:{

  		hello:function(){

  		//console.log(123)
  		}

  },
  mounted:function(){

  }


})
