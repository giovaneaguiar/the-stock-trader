import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
    //Objeto responsável por configurar a Store
          
    actions,
    modules: {
        stocks, portfolio
    }


})
