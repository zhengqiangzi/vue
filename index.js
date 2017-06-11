window.$=window.jQuery=require("jquery");

require("bootstrap");

import  VueRouter       from           'vue-router';
import  { router}      from           './router';

var Vue=require("vue")



import { store } from './store';



var app = new Vue({

  el: '#app',
  store:store,
  router:router,
  data:{
 
  },

  components:{

  	"mad-header":require("./components/mad-header.component.vue"),
  	"mad-container":require("./components/mad-container.component.vue"),
  	"mad-footer":require("./components/mad-footer.component.vue"),
  },
  methods:{

  
  },
  beforeCreate:function(){

    this.$store.dispatch("loadServerData")
  }
})
