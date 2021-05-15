import stocks from '@/data/stocks'
// MODULO PARA STOCK
export default {
    state: {
        stocks: []
    },

    mutations: {
        alterarStock(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        //commit é responsável por chamar mutations
        //a variavel ordem vem da função comprarAcao em Stock.vue
        comprarStock({ commit }, ordem) {
            commit()
        },
        inicializaStock({ commit }) {
            commit('alterarStock', stocks)

        }
    },

    getters: {
        stocks(state){
            return state.stocks
        }

    }
}