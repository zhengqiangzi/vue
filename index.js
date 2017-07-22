window.$=window.jQuery=require("jquery");
require("bootstrap");
import VueForm from 'vue-form';
import Vue from 'vue';
import 'element-ui/lib/theme-default/index.css'
import { Table , tableColumn} from 'element-ui';

import  Test  from "./components/test.component.vue";

Vue.component('el-table',Table)
Vue.component('el-table-column',tableColumn);
Vue.component('my-tt',Test);

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
     tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
  },
  methods:{


  },
  components:{


  }
 

})
