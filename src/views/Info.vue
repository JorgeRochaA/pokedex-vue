<template>
  <div class="info" :class="this.bg_color">
    <InfoNavbar :name="this.currentPokemon.name" :id="this.currentPokemon.id" />
    <div class="pokeball_container">
      <img src="../assets/Pokeball_Info.svg" alt="poke" />
    </div>
    <PokemonStats
      :img_url="this.sprites.front_default"
      :alt_name="this.currentPokemon.name"
      :pokemonData="this.currentPokemon"
    />
  </div>
</template>
<script>
import axios from "axios";
import InfoNavbar from "../components/InfoNavbar.vue";
import PokemonStats from "../components/PokemonStats.vue";
export default {
  name: "info",
  components: {
    InfoNavbar,
    PokemonStats,
  },
  data() {
    return {
      bg_color: "",
      currentPokemon: [],
      sprites:[]
    };
  },
  async mounted() {
    await this.addCurrentPokemon(this.$route.params.id);
  },
  methods: {
    async addCurrentPokemon(id) {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((result) => {
          this.currentPokemon = result.data;
          this.sprites = result.data.sprites;
          this.bg_color = result.data.types[0].type.name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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

  .pokeball_container {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 15px;
    margin-right: 30px;
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
