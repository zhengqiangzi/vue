import Vue                     from                'vue';
import VueRouter               from                'vue-router';

import * as madUserList        from                '../components/mad-user-list.component.vue';
import * as addUserForm        from                '../components/mad-user-add-form.component.vue';
import Home      from               '../components/ch-home-component.vue';
import About      from               '../components/ch-about-component.vue';
import Contact      from               '../components/ch-contact-component.vue';
import List      from               '../components/ch-list-component.vue';

Vue.use(VueRouter)


export let router =new VueRouter({

		routes:[

			{path: '', component: Home},
			{path: '/home', component: Home},
			{path: '/about', component: About},
			{path: '/contact', component: Contact},
			{path: '/list/:id', component: List},

		]

})