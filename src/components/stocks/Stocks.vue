<template>
  <v-layout row wrap>
    <!-- pega o array definido em data() -->
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import Stock from "./Stock";
export default {
  components: { Stock },
  computed: {
    stocks() {
      //direcionar a funcao para o getter do modulo e gerar o dado na store
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style>
</style>