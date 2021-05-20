import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './plugins/axios'


Vue.config.productionTip = false

Vue.filter('currency', value =>{
	//filtro monetário registrado de maneira global
	return 'R$ ' + value.toLocaleString()

})

new Vue({
	router, store,
	render: h => h(App),
}).$mount('#app')
