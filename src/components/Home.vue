<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">
      Negocie e Consulte suas Ações
    </h1>
    <v-sheet :elevation="6" class="pa-2 purple darken-3">
      <!-- elevation = sombra 
        pa = padding all -->
      <!-- mensagem de alerta na tela inicial -->
      <v-icon class="white--text mr-2"> info </v-icon>
      <span class="headline white--text font-weight-light">
        Você pode Salvar & Carregar os Dados</span
      >
    </v-sheet>
    <v-sheet :elevation="6"  class="pa-2 yellow darken-4 mt-3">
      <!-- elevation = sombra 
        pa = padding all -->
      <!-- mensagem de alerta na tela inicial -->
      <v-icon class="white--text mr-2"> info </v-icon>
      <span class="headline white--text font-weight-light">
        Clique em Finalizar Dia para iniciar um novo dia!</span
      >
    </v-sheet>
    <v-divider class="my-4" />
    <p class="display-1"><strong >Seu Saldo:</strong> {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      //pegar o saldo
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>