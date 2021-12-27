import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    filterByName: false,
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
      }else{
        state.pokemons.sort(function (a, b) {
          return a.id- b.id;
      });
      }
    },
    changeFilterValue(state,payload){
    state.filterByName = payload;
    }
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
    changeFilterValueAction({commit},payload){
      commit("changeFilterValue",payload);
    }
  },
  modules: {},
  getters: {
    getPokemons: (state) => state.pokemons,
    getFilterValue: (state) => state.filterByName,
  },
});
