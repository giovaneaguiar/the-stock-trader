<template>
  <!-- padding right 3 e padding bottom 3, ou seja, 
  faz o espaçamento entre os blocos de açoes -->
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <!-- xs12 md6 lg4 = atributos para melhorar a visualização em
    dispositivos pequenos, médios e computadores convencionais
    xs12 - celular / md6 - tablet / lg4 - desktop -->
    <v-card class="green darken-3 white--text">
      <!-- v-card = título desse componente-->
      <v-card-title class="headline">
        <strong>NOME<small> (Preço: PRECO)</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <!-- outro v-card = corpo do componente -->
      <!-- colocar aqui a quantidade que o usuario vai 
      selecionar e o botao para comprar uma ação -->
      <v-container fill-height>
        <!-- fill-height = preencher toda altura -->
        <v-text-field label="Quantidade" type="number" />
        <v-btn class="green darken-3 white--text">Comprar</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {};
</script>

<style>
</style>