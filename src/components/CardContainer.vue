<template>
  <div class="cardContainer" id="cardContainer">
    <div class="card_container">
      <Card
        v-for="pokemon in getPokemons"
        :key="pokemon.id"
        :id="pokemon.id"
        :img="pokemon.sprites.other.home.front_default"
        :name="pokemon.name"
        :colorName="pokemon.types[0].type.name"
        :types="pokemon.types"
      />
      <button v-on:click="this.loadMorePokemons" id="loadMorePokemons">
        Load more
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "CardContainer",
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["getPokemons", "getScrollPaginationValue"]),
  },
  methods: {
    ...mapActions(["loadPokemonsAction", "changeScrollPaginationValueAction"]),
    loadMorePokemons() {
      console.log(this.getPokemons)
      this.changeScrollPaginationValueAction({
        currentID: this.getScrollPaginationValue.limit + 1,
        limit: this.getScrollPaginationValue.limit + 5, // max 898
      });
      this.loadPokemonsAction();
    },
  },
};
</script>
<style scoped lang="scss">
@mixin loadMorePokemonsStyle {
  #loadMorePokemons {
    height: 50px;
    border: none;
    background-color: #212121;
    border-radius: 10px;
    color: white;
    margin: 50px;
    &:hover{
      cursor: pointer;
    }
  }
}

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

    @include loadMorePokemonsStyle;
  }
  @media only screen and (min-width: 1200px) {
    .card_container {
      grid-template-columns: auto auto auto auto;
      justify-content: space-evenly;
    }
  }
  
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .card_container {
      grid-template-columns: auto auto auto;
      justify-content: space-evenly;
    }
  }
  
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
  
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .card_container {
      width: 100%;
      grid-template-columns: auto auto;
      justify-content: space-evenly;
    }
  }

  @media only screen and (max-width: 575px) {
    .card_container {
      grid-template-columns: auto;
      justify-content: space-evenly;
    }
  }
}
</style>
