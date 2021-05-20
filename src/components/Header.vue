<template>
  <v-toolbar app>
    <!-- Classes definidas no vuetify -->
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <!-- font-weight-light = fonte mais fina -->
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <!-- flat = melhora estética dos botões -->
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer> </v-spacer>

    <v-toolbar-items>
      <!-- Função endDay chama a action para chamar o randomizeStocks -->
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <!-- slot="activator" = abrir uma outra janela após clicar no botão -->
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title> Salvar Dados </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title> Carregar Dados </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
     ...mapActions(['randomizeStocks']), 
     endDay(){
       //funcao finalizar dia
       this.randomizeStocks()
     },
     saveData(){
       const { funds, stockPortfolio, stocks } = this.$store.getters
       this.$http.put('data.json', { funds, stockPortfolio, stocks })
     }
  }
};
</script>

<style>
</style>
