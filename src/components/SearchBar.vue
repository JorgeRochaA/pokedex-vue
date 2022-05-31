<template>
  <div class="searchBar">
    <input type="text" placeholder="🔎  Search By Name" v-model="pokemonName" />
    <div class="button_container">
      <button class="btn" v-on:click="filter()">Search</button>
      <img
        class="pikachu"
        src="https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif"
        alt="pikachu"
        id="pikachu"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      pokemonName: "",
    };
  },
  mounted() {
    this.pokemonName = this.getPokemonFilterName;
  },
  computed: {
    ...mapGetters(["getPokemons", "getPokemonFilterName"]),
  },
  watch: {
    getPokemonFilterName: function () {
      if (this.getPokemonFilterName == "" && this.getPokemons.length == 1) {
        this.clearPokemonsAction();
        this.loadPokemonsUrl("https://pokeapi.co/api/v2/pokemon/");
      }
    },
    pokemonName: function () {
      this.setPokemonName(this.pokemonName);
    },
  },
  methods: {
    ...mapActions([
      "addPokemonAction",
      "clearPokemonsAction",
      "loadPokemonsUrl",
      "setPokemonName",
    ]),
    filter() {
      if (!this.getPokemonFilterName == "") {
        document.getElementById("pikachu").classList.add("search");
        setTimeout(() => {
          document.getElementById("pikachu").classList.remove("search");
        }, 2000);
        axios
          .get(
            "https://pokeapi.co/api/v2/pokemon/" +
              this.getPokemonFilterName.toLowerCase()
          )
          .then((result) => {
            this.clearPokemonsAction();
            this.addPokemonAction(result.data);
          })
          .catch((err) => {
            console.log(err);
            alert("pokemon no encontrado");
            this.pokemonName = "";
          });
      } else {
        alert("los espacio no puede estar vacío");
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
  position: sticky;
  top: 0;

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
  .button_container {
    height: 65%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      height: 100%;
      width: 100%;
      border: none;
      color: white;
      background-color: #212121;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
      }
    }
    .pikachu {
      height: 45px;
      position: absolute;
      z-index: -1;
      transition: 0.5s;
      cursor: pointer;
      pointer-events: none;
      &.search {
        display: initial;
        transform: translateY(50px);
      }
    }
  }
}
</style>
