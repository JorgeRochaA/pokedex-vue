import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  mutations: {
    addPokemon(state, payload) {
      let newArray = [...state.pokemons, payload];
      state.pokemons = newArray;
    },
    clearPokemons(state) {
      state.pokemons = [];
    },
  },
  actions: {
    addPokemonAction({ commit }, payload) {
      commit("addPokemon", payload);
    },
    clearPokemonsAction({ commit }) {
      commit("clearPokemons");
    },
  },
  modules: {},
  getters: {
    getPokemons: (state) => state.pokemons,
  },
});
