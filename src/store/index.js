import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    scrollPagination: {
      currentID: 1,
      limit: 5, // max 898
    },
    currentPokemon: {
      name: "",
      id: 0,
      img: [],
      types: [],
      height: 0,
      weight: 0,
      stats: [],
      bg_color:""
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
    changeScrollPaginationValue(state, payload) {
      state.scrollPagination = payload;
    },
    setCurrentPokemon(state, payload) {
      state.currentPokemon = payload;
    },
  },
  actions: {
    addPokemonAction({ commit }, payload) {
      commit("addPokemon", payload);
    },
    clearPokemonsAction({ commit }) {
      commit("clearPokemons");
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
    setCurrentPokemon({ commit }, payload) {
      commit("setCurrentPokemon", payload);
    },
  },
  getters: {
    getPokemons: (state) => state.pokemons,
    getScrollPaginationValue: (state) => state.scrollPagination,
    getCurrentPokemon: (state) => state.currentPokemon,
  },
});
