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
  },
  methods:{

  
  },
  directives:{

  		hello:function(){

  			console.log(123)
  		}

  }


})
