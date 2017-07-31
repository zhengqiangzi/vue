import Vue from 'vue';
import Loading from 'element-ui/packages/loading'
import 'element-ui/lib/theme-default/index.css'

console.log(Loading.service)

var app = new Vue({
  el:"#app",
  data:{

      a:2
  },
  mounted:function(){


     let loading = Loading.service();

     console.log(loading)
  }
})