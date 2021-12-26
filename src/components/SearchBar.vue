<template>
  <div class="searchBar">
    <input type="text" placeholder="🔎  Search By Name" v-model="pokemonName" />
    <button v-on:click="filter()">Search</button>
  </div>
</template>
<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      pokemonName: ""
    }
  },
  methods: {
    ...mapActions(['addPokemonAction','clearPokemonsAction']),
    filter() {
      if (this.pokemonName == "") {
        this.clearPokemonsAction();
        this.loadPokemons();
      } else {
              axios.get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonName.toLowerCase()).then((result) => {
        this.clearPokemonsAction();
        this.addPokemonAction(result.data);
        this.pokemonName = "";
      }).catch((err) => {
        console.log(err);
      });
      }
    },
       async loadPokemons() {
      for (let i = 1; i <= 150; i++) {
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i)
          .then((result) => {
              this.addPokemonAction(result.data);
          })
          .catch((err) => {
            console.log(err);
            console.log("dfgdfgdkldfgkldhfgkldfglg");
          });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.searchBar {
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input {
    height: 65%;
    width: 60%;
    text-align: center;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:focus {
      outline: none;
    }
  }
  button{
    height: 65%;
    width: 20%;
    border: none;
    color: white;
    background-color: #212121;
    border-radius: 10px;
  }
}
</style>
