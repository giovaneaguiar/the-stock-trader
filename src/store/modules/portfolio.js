export default {
    state: {
        //saldo em conta
        funds: 10000,
        //quantidade de ações que fazem parte do portfolio
        stocks: []
    },

    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            //comprar acao
            const record = state.stocks.find(element => element.id == stockId)
            //funcao que detecta se já existe essa ação comprada
            if (record) {
                //se houver a detecção...
                record.quantity += quantity
            }
            else {
                //caso não, adiciona uma nova ação no array de estoque
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                    //obs: nao é necessário passar o preço
                })

            }
            //proximo passo: ajustar o saldo
            state.funds -= stockPrice * quantity

        },

        sellStock(state, { stockId, quantity, stockPrice }) {
            //vender ação
            const record = state.stocks.find(element => element.id == stockId)
            if (record.quantity > quantity) {
                //saber se a quantidade de ações que eu tenho é maior que a 
                //quantidade de ações que eu quero vender
                record.quantity -= quantity
            }
            else {
                state.stocks.splice(state.stocks.index0f(record), 1)
                //funcao para remover um elemento do array


            }
            state.funds += stockPrice * quantity
            //ajustar saldo

        }
    },
    actions: {
        //responsavel por vender uma ação chamando a mutation
        sellStock({ commit }, ordem) {
            commit('sellStock', ordem)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            //retorna as acoes que tenho no portfolio
            return state.stocks.map(stock => {
                //utiliza metodo 'map' para transformar um array que
                //possui apenas dois atributos, para um array completo, como nome e preço
                const record = getters.stocks.find(element => element.id == stocks.id)
                //pegando o getters daqui, consigo acessar o outro getters do stocks.js
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price,
                }

            })

        },

        funds(state) {
            return state.funds
        }
    }
}