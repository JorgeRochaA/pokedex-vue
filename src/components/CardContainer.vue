<template>
  <div class="cardContainer" id="cardContainer">
    <Card
      v-for="pokemon in getPokemons"
      :key="pokemon.id"
      :id="pokemon.id"
      :img="pokemon.sprites.other.home.front_default"
      :name="pokemon.name"
      :colorName="pokemon.types[0].type.name"
      :types="pokemon.types"
    />
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, auto);
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}
@media screen and (min-width: 742px) {
  .cardContainer {
    grid-template-columns: repeat(2, auto);
  }
}
@media screen and (min-width: 1095px) {
  .cardContainer {
    grid-template-columns: repeat(3, auto);
  }
}
</style>
