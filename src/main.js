import Vue from 'vue'
import App from './App.vue'
require('./assets/css/style1.css') 
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import axios from 'axios'
Vue.prototype.$http=axios
import routes from './router.config.js'
//const routes=[
//	{
//		path:'/article',component:Article
//	}
//]
const router=new VueRouter(
	{
		routes,
		mode: 'history'

	}
)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
