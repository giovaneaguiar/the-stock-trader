import stocks from '../../data/stocks'
// MODULO PARA STOCK
export default {
    state: {
        stocks: []
    },

    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state){
                state.stocks.forEach(stock => {
                    //forEach = percorrer o todo array
                    stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
                    //funcao que randomiza o valor das ações, porém dando
                    //uma variação um pouco para alta com -0.45.
                    //no final o valor é arredondado, com Math.round.
                })

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

        },
        randomizeStocks({ commit }){
            commit('randomizeStocks')
        }
    },

    getters: {
        stocks(state){
            return state.stocks
        }

    }
}