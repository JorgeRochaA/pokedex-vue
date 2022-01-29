<template>
  <div class="pokemonStats">
    <div class="pokemon_img">
      <div class="img_container" id="img_container">
        <img
          v-if="!this.shiny"
          class="animated_img"
          :src="this.getCurrentPokemon.img.front_default"
          :alt="this.getCurrentPokemon.name"
        />
        <img
          v-else
          :src="this.getCurrentPokemon.img.front_shiny"
          :alt="this.getCurrentPokemon.name"
        />
      </div>
    </div>
    <div class="stats_container">
      <NextPrevious />
      <Types />
      <Options />
      <AboutPokemon />
      <BaseStats v-if="this.getCurrentOption == 'about'" />
      <PokemonForms v-if="this.getCurrentOption == 'forms'" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AboutPokemon from "../components/AboutPokemon.vue";
import BaseStats from "../components/BaseStats.vue";
import NextPrevious from "../components/NextPrevious.vue";
import Options from "../components/Options.vue";
import PokemonForms from "../components/PokemonForms.vue";
import Types from "../components/Types.vue";
export default {
  name: "pokemonStats",
  components: {
    AboutPokemon,
    BaseStats,
    NextPrevious,
    Options,
    PokemonForms,
    Types,
  },
  data() {
    return {
      shiny: false,
    };
  },
  computed: {
    ...mapGetters(["getCurrentPokemon", "getCurrentOption"]),
  },
  watch: {
    getCurrentPokemon: function () {
      this.addAnimation();
    },
  },
  methods: {
    addAnimation() {
      let img = document.querySelector(".animated_img");
      img.style.display = "none";
      img.classList.remove("animated");
      setTimeout(() => {
        img.style.display = "initial";
        img.classList.add("animated");
      }, 100);
    },
    showShiny() {
      this.shiny = !this.shiny;
    },
  },
};
</script>
<style scoped lang="scss">
@mixin mb_50px {
  margin-bottom: 50px;
}
@mixin define_height($p_height) {
  min-height: $p_height !important;
}

.pokemonStats {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mb_50px;

  .pokemon_img {
    margin-top: 30px;
    height: 150px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    .img_container {
      height: 250px;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      img {
        margin-top: 30px;
        height: 100%;
        position: absolute;
        pointer-events: none;
        z-index: 4;
        &.animated {
          animation: slide 1s ease 0s 1 normal forwards;
        }
      }
    }
  }

  .stats_container {
    height: 515px;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 700px) {
  .img_container {
    justify-content: center;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .img_container {
    justify-content: center;
  }
  .stats_container {
    @include mb_50px;
    @include define_height(400px);
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .img_container {
    justify-content: center;
  }
  .stats_container {
    @include mb_50px;
    @include define_height(500px);
  }
}

@media only screen and (max-width: 575px) {
  .img_container {
    justify-content: center;
  }
  .stats_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mb_50px;
    @include define_height(500px);
  }
}
// Animation
@keyframes slide {
  0% {
    transform: translateX(-150%);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
