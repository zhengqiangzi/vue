import Vue                     from                'vue';
import VueRouter               from                'vue-router';

import * as madUserList        from                '../components/mad-user-list.component.vue';
import * as addUserForm        from                '../components/mad-user-add-form.component.vue';
import * as editUserForm        from               '../components/mad-user.edit.vue';

Vue.use(VueRouter)


export let router =new VueRouter({

		routes:[

			{path: '', component: madUserList},
			{path: '/list', component: madUserList},
			{path: '/add', component: addUserForm},
			{path: '/edit/:id', component: editUserForm},


		]

})