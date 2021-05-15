import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
Vue.use(Vuex)

export default new Vuex.Store({
    //Objeto responsável por configurar a Store
  
    modules: {
        stocks
    }


})
