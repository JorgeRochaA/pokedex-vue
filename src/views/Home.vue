<template>
  <div class="home">
    <Navbar />
    <SearchBar />
    <CardContainer />
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import Navbar from "../components/Navbar.vue";
import SearchBar from "../components/SearchBar.vue";
import CardContainer from "../components/CardContainer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    SearchBar,
    CardContainer,
  },
  mounted() {
    this.loadPokemons();
  },
  methods: {
    ...mapActions(["addPokemonAction"]),
   async loadPokemons() {
      for (let i = 1; i <= 150; i++) {
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i)
          .then((result) => {
              this.addPokemonAction(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
