import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import TeamCard from './components/TeamCard.vue'


Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
    
     
  
}).$mount('#app')
