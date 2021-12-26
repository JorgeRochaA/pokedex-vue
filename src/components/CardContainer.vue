<template>
  <div class="cardContainer">
    <div class="card_container">
        <Card v-for="pokemon in getPokemons" :key="pokemon.id" :id="pokemon.id" :img="pokemon.sprites.front_default" :name="pokemon.name" :colorName="pokemon.types[0].type.name"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "CardContainer",
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["getPokemons"]),
  },
};
</script>
<style scoped lang="scss">
.cardContainer {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  .card_container {
    height: 100%;
    min-height: 200px;
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
  }
  /* Escritorio grande */
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  /* Escritorio pequeño / tablet */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  /* Tablets y phablets */
  @media only screen and (min-width: 576px) and (max-width: 767px) {
  }

  /* Teléfonos */
  @media only screen and (max-width: 575px) {
    .card_container {
      display: grid;
      grid-template-columns: auto;
      justify-content: space-evenly;
    }
  }
}
</style>
