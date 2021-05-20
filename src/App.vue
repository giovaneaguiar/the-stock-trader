<template>
  <!-- componentes do vuetify -->
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition name="slide" mode="out-in">
          <!-- transição das rotas -->
        <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  components: { Header },

  created() {
    //chamar action do módulo
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
/* animações = de onde eu vou sair, para onde eu vou chegar */
      @keyframes slide-in {
            from { transform: translateY(-30px); opacity: 0; }
           to { transform: translateY(0px); opacity: 1; }
      }

      @keyframes slide-out {
        from { transform: translateY(0px); opacity: 1; }
           to { transform: translateY(-30px); opacity: 0; } 

      }

      .slide-enter-active {
        animation: slide-in 0.3s ease;
        /* propriedade animation, qual keyframe vai usar,
        o tempo, e qual algoritmo vai usar para fazer a animação */
      }

      .slide-leave-active {
        animation: slide-out 0.3s ease;
      }
</style>

