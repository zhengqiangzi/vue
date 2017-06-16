window.$=window.jQuery=require("jquery");

require("bootstrap");
import  VueRouter       from           'vue-router';
import  { router}       from           './router';
import  { store }       from           './store';
import  VueForm         from            'vue-form';

var Vue=require("vue");

//console.log(Vue.prototype)
Vue.use(VueForm,{

  validators:{

      'my-custom-validator':function(value, attrValue, vnode){


        return true;
         // return value==attrValue
      },
      'bigger-than':function(value,attrValue){

          return value>attrValue
      }

  }

});



Vue.component('mad-shower',require("./components/mad-shower.component.vue"));

var rootV=require("./components/mad-shower.component.vue");

var MyShower=Vue.extend(rootV)

var pp=new MyShower({

    el: document.createElement('div'),
    value:true

})


var app = new Vue({

  el: '#app',
  store:store,
  data:{
      vms:"zhengqiangzi",
      show:true
  },
  components:{
    "mad-active":require("./components/mad-active.component.vue"),
    "mad-shower":rootV,

  },
  methods:{

      ae:function(){

        console.log(this)
        console.log('ae')
      }
  },
  directives:{

      focus:function(el,binding,newVnode,oldVnode){

      }
  }
})


