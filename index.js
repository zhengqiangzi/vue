window.$=window.jQuery=require("jquery")
import Vue from 'vue';
import {router} from './router';
import axios from 'axios'
import VueAxios from 'vue-axios';
import {store} from "./store";
 
Vue.use(VueAxios, axios);

require("bootstrap")
var app = new Vue({

  el: '#app',

  router,
  store,

  data:function(){
  	return {}
  },
  computed:{
  	menu_data:{
  		get:function(){
  			return this.$store.state.info
  		}
  	}
  },
  methods:{


  },
  mounted:function(){

  }


})
