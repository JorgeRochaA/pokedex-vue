<template>
  <div class="forms_container">
    <div v-for="form in this.getCurrentPokemonForms" :key="form.id">
      <div class="img_container">
        <h5>{{ form.name }}</h5>
        <img :src="form.sprites.other.home.front_default" :alt="form.name" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "pokemonForms",
  data() {
    return {
      pokemonForms: [],
    };
  },
  mounted() {
    this.setPokemonForms();
  },
  computed: {
    ...mapGetters(["getCurrentPokemon", "getCurrentPokemonForms"]),
  },
  methods: {
    ...mapActions(["setCurrentPokemonForms"]),
    async setPokemonForms() {
      if (this.getCurrentPokemon.id != 25) {
        await axios
          .get(
            "https://pokeapi.co/api/v2/pokemon-species/" +
              this.getCurrentPokemon.id
          )
          .then((result) => {
            let varieties = result.data.varieties;
            varieties.shift();
            if (varieties.length > 0) {
              for (let i = 0; i < varieties.length; i++) {
                let current = varieties[i];
                if (
                  !current.pokemon.name.includes("mega") &&
                  !current.pokemon.name.includes("gmax")
                ) {
                  this.pokemonForms.push(current);
                }
              }
              this.getDataEachForm();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    async getDataEachForm() {
      let array = [];
      for (let i = 0; i < this.pokemonForms.length; i++) {
        const element = this.pokemonForms[i];
        await axios
          .get(element.pokemon.url)
          .then((result) => {
            array.push(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.setCurrentPokemonForms(array);
    },
  },
};
</script>
<style lang="scss">
.forms_container {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  .img_container {
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    h5 {
      height: 10%;
      position: absolute;
      bottom: 0;
    }
    img {
      height: 90%;
    }
  }
}
@media screen and (min-width: 700px) {
  .forms_container {
    height: 250px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .forms_container {
    height: 160px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .forms_container {
    height: 250px;
  }
}
@media only screen and (max-width: 575px) {
  .forms_container {
    height: 250px;
  }
}
</style>
