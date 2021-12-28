<template>
  <div class="cardContainer" id="cardContainer">
    <div class="card_container">
      <Card
        v-for="pokemon in getPokemons"
        :key="pokemon.id"
        :id="pokemon.id"
        :img="pokemon.sprites.front_default"
        :name="pokemon.name"
        :colorName="pokemon.types[0].type.name"
      />
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
    display: grid;
    height: 100%;
    min-height: 200px;
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
    .card_container {
      grid-template-columns: auto auto auto auto;
      justify-content: space-evenly;
    }
  }
  /* Escritorio grande */
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .card_container {
      grid-template-columns: auto auto auto;
      justify-content: space-evenly;
    }
  }
  /* Escritorio pequeño / tablet */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .card_container {
      grid-template-columns: auto auto;
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 910px) and (max-width: 1199px) {
    .card_container {
      grid-template-columns: auto auto auto auto;
    }
  }
  /* Tablets y phablets */
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .card_container {
      width: 100%;
      grid-template-columns: auto auto;
      justify-content: space-evenly;
    }
  }

  /* Teléfonos */
  @media only screen and (max-width: 575px) {
    .card_container {
      grid-template-columns: auto;
      justify-content: space-evenly;
    }
  }
}
</style>
