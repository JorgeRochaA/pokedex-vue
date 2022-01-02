<template>
  <div class="type_container">
    <div v-for="type in this.getCurrentPokemon.types" :key="type.slot">
      <div class="type" :class="type.type.name">
        {{ type.type.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "typesContainer",
  computed: {
    ...mapGetters(["getCurrentPokemon"]),
  },
};
</script>
<style lang="scss" scoped>
.type_container {
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  width: 100%;

  .type {
    min-width: 100px;
    padding: 10px;
    border-radius: 5px;

    :first-letter {
      text-transform: uppercase;
    }

    &.normal {
      background-color: #a8a77a;
    }

    &.fire {
      background-color: #ee8130;
    }

    &.water {
      background-color: #6390f0;
    }

    &.electric {
      background-color: #f7d02c;
    }

    &.grass {
      background-color: #7ac74c;
    }

    &.ice {
      background-color: #96d9d6;
    }

    &.fighting {
      background-color: #c22e28;
    }

    &.poison {
      background-color: #a33ea1;
    }

    &.ground {
      background-color: #e2bf65;
    }

    &.flying {
      background-color: #a98ff3;
    }

    &.psychic {
      background-color: #f95587;
    }

    &.bug {
      background-color: #a6b91a;
    }

    &.rock {
      background-color: #b6a136;
    }

    &.ghost {
      background-color: #735797;
    }

    &.dragon {
      background-color: #6f35fc;
    }

    &.dark {
      background-color: #705746;
    }

    &.steel {
      background-color: #b7b7ce;
    }

    &.fairy {
      background-color: #d685ad;
    }
  }
}
</style>
