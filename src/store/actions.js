import Vue from 'vue'

export default {
    //actions mais globais
    // ou seja, actions.js mexe com a parte de stocks e também com 
    //a parte de portfólio, por isso foi separado.
    loadData({ commit }){
        //metodo que carrega os dados do backend, pega as informações
        //e commita as mudanças pelo Firebase.
        Vue.prototype.$http.get('data.json').then(resp => {
          const data = resp.data
          //chamar as mutations
          if (data){
              commit('setStocks', data.stocks)
              commit('setPortfolio', {
                  funds: data.funds,
                  stockPortfolio: data.stockPortfolio
              })
          }
        })
    }

}