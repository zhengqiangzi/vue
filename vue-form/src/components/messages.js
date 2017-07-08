import { vueFormConfig, vueFormState } from '../providers';

function findLabel (nodes) {
  if(!nodes) {
    return;
  }
  for (let i = 0; i < nodes.length; i++) {
    let vnode = nodes[i];
    if(vnode.tag === 'label') {
      return nodes[i];
    } else if (nodes[i].children) {
      return findLabel(nodes[i].children);
    }
  }
}

export default {
  inject: {vueFormConfig, vueFormState},
  render(h) {


   // console.log(vueFormState)
    const children = [];
    const field = this.formstate[this.name];

    if (field && field.$error && this.isShown) {

      Object.keys(field.$error).forEach((key) => {

       // console.log(key)
      //  console.log(this.$scopedSlots[key])
        if(this.$slots[key] || this.$scopedSlots[key]) {

          const out = this.$slots[key] || this.$scopedSlots[key](field);
          if(this.autoLabel) {
            const label = findLabel(out);
            if(label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);

        }
      });
      if(!children.length && field.$valid) {
        if(this.$slots.default || this.$scopedSlots.default) {
          const out = this.$slots.default || this.$scopedSlots.default(field);
          if(this.autoLabel) {
            const label = findLabel(out);
            if(label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      }
    }
       if (field && field.$error && this.isShown) {

          if(Object.keys(field.$error).length>0){

             return h(this.tag || this.vueFormConfig.messagesTag,{domProps:{ innerHTML: field.msg}});

          }else{

             return h(this.tag || this.vueFormConfig.messagesTag,{domProps:{ innerHTML: ''}});
          }
        }else{
             return h(this.tag || this.vueFormConfig.messagesTag,{domProps:{ innerHTML: ''}});
        }
  },
  props: {
    state: Object,
    name: String,
    show: {
      type: String,
      default: ''
    },
    tag: {
      type: String
    },
    autoLabel: Boolean,
  },
  data () {
    return {
      formstate: null
    };
  },
  created () {
    this.formstate = this.state || this.vueFormState;
  },
  computed: {
    isShown() {
      const field = this.formstate[this.name];

      if (!this.show || !field) {
        return true;
      }

      const compare = (v) => {
        return field[v.trim()];
      };

      if (this.show.indexOf('&&') > -1) {
        // and logic - every
        const split = this.show.split('&&');
        return split.every(compare);
      } else if (this.show.indexOf('||') > -1) {
        // or logic - some
        const split = this.show.split('||');
        return split.some(compare);
      } else {
        // single
        return field[this.show];
      }
    }
  }
};
