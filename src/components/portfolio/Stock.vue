<template>
  <!-- padding right 3 e padding bottom 3, ou seja, 
  faz o espaçamento entre os blocos de açoes -->
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <!-- xs12 md6 lg4 = atributos para melhorar a visualização em
    dispositivos pequenos, médios e computadores convencionais
    xs12 - celular / md6 - tablet / lg4 - desktop -->
    <v-card class="blue darken-3 white--text">
      <!-- v-card = título desse componente-->
      <v-card-title class="headline">
        <strong
          >{{ stock.name }}
          <small>
            (Preço: {{ stock.price }} | Qtde: {{ stock.quantity }})</small
          >
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <!-- outro v-card = corpo do componente -->
      <!-- colocar aqui a quantidade que o usuario vai 
      selecionar e o botao para comprar uma ação -->
      <v-container fill-height>
        <!-- fill-height = preencher toda altura
         v-model.number - pegar a variavel da quantidade inicial -->
        <v-text-field
          label="Quantidade"
          type="number"
          :error="insufficientQuantity || !Number.isInteger(quantity)"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text"
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          @click="sellStock">{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],

  data() {
    return {
      // quantidade de ações começar em 0
      quantity: 0
    }
  },

  computed: {
      insufficientQuantity(){
        return this.quantity > this.stock.quantity
        //se a quantidade que eu digitei for maior que a quantidade
        //que eu tenho, significa que tenho quantidade insuficiente.
      }

  },

  methods: {
    sellStock() {
      const ordem = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', ordem);
      //disparar uma ação
      this.quantity = 0
    }
  }
}
</script>

<style>
</style>