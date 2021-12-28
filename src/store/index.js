import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    filterByName: false,
    scrollPagination: {
      currentID: 1,
      limit: 3, // max 898
    },
  },
  mutations: {
    addPokemon(state, payload) {
      let newArray = [...state.pokemons, payload];
      state.pokemons = newArray;
    },
    clearPokemons(state) {
      state.pokemons = [];
    },
    sortPokemons(state, payload) {
      if (payload == "name") {
        state.pokemons.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
      } else {
        state.pokemons.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    },
    changeFilterValue(state, payload) {
      state.filterByName = payload;
    },
    changeScrollPaginationValue(state, payload) {
      state.scrollPagination = payload;
    },
  },
  actions: {
    addPokemonAction({ commit }, payload) {
      commit("addPokemon", payload);
    },
    clearPokemonsAction({ commit }) {
      commit("clearPokemons");
    },
    sortPokemonsAction({ commit }, payload) {
      commit("sortPokemons", payload);
    },
    changeFilterValueAction({ commit }, payload) {
      commit("changeFilterValue", payload);
    },
    async loadPokemonsAction({ commit }) {
      for (
        let i = this.state.scrollPagination.currentID;
        i <= this.state.scrollPagination.limit;
        i++
      ) {
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i)
          .then((result) => {
            commit("addPokemon", result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    changeScrollPaginationValueAction({ commit }, payload) {
      commit("changeScrollPaginationValue", payload);
    },
  },
  getters: {
    getPokemons: (state) => state.pokemons,
    getFilterValue: (state) => state.filterByName,
    getScrollPaginationValue: (state) => state.scrollPagination,
    getCurrentPokemon: () => JSON.parse(localStorage.getItem("currentPokemon")),
  },
});
