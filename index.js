window.$=window.jQuery=require("jquery");
require("bootstrap");
import VueForm from 'vue-form';
import Vue from 'vue';

var app = new Vue({

  provide:{
    user:{

      username:"johnny",
      age:30,
      sex:1,
      address:"shanghai"
    }
  },
  el: '#app',
  
  data:{

  },
  methods:{


  },
  components:{

    "mad-feature":require("./components/feature.component.vue"),
    "mad-edit-feature":require("./components/editFeature.component.vue")

  }
 

})
