import stocks from '../../data/stocks'
// MODULO PARA STOCK
export default {
    state: {
        stocks: []
    },

    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        //commit é responsável por chamar mutations
        //a variavel ordem vem da função comprarAcao em Stock.vue
        buyStock({ commit }, ordem) {
            commit('buyStock', ordem)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)

        }
    },

    getters: {
        stocks(state){
            return state.stocks
        }

    }
}