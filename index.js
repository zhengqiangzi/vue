window.$=window.jQuery=require("jquery")
require("bootstrap")
var Vue=require("vue")
var Vuex=require("vuex")

import { store } from './store';



var app = new Vue({

  el: '#app',
  store:store,
  data:{
 
  },

  components:{

  	"mad-header":require("./components/mad-header.component.vue"),
  	"mad-container":require("./components/mad-container.component.vue"),
  	"mad-footer":require("./components/mad-footer.component.vue"),
  },
  methods:{

  
  }



})
