<template>
  <div class="info" :class="this.getCurrentPokemon.bg_color">
    <InfoNavbar />
    <div class="pokeball_container">
      <img src="../assets/Pokeball_Info.svg" alt="poke" />
    </div>
    <PokemonStats/>
  </div>
</template>
<script>
import InfoNavbar from "../components/InfoNavbar.vue";
import PokemonStats from "../components/PokemonStats.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "info",
  components: {
    InfoNavbar,
    PokemonStats,
  },
  async mounted() {
    await this.setCurrentPokemon(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["getCurrentPokemon"]),
  },
  methods: {
    ...mapActions(["setCurrentPokemon"]),
  },
};
</script>
<style scoped lang="scss">
.info {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  transition: .5s;

  .pokeball_container {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    pointer-events: none;
    display: flex;
    justify-content: flex-end;
    img {
      height: 300px;
      transform: rotate(320deg);
    }
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
</style>
