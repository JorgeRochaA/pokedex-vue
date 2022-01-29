import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentOption: "about",
    currentPokemon: {
      bg_color: "",
      height: 0,
      id: 0,
      img: [],
      name: "",
      stats: [],
      types: [],
      weight: 0,
    },
    currentPokemonForms: [],
    currentScroll: 0,
    homeFirstRender: true,
    pokemons: [],
    scrollPagination: {
      currentID: 1,
      limit: 10, // max 898
    },
  },
  mutations: {
    addPokemon(state, payload) {
      let newArray = [...state.pokemons, payload];
      state.pokemons = newArray;
    },
    changeScrollPaginationValue(state, payload) {
      state.scrollPagination = payload;
    },
    clearCurrentPokemon(state) {
      state.currentPokemon = {
        bg_color: "",
        height: 0,
        id: 0,
        img: [],
        name: "",
        stats: [],
        types: [],
        weight: 0,
      };
    },
    clearPokemons(state) {
      state.pokemons = [];
    },
    setCurrentOption(state, payload) {
      state.currentOption = payload;
    },
    setCurrentPokemon(state, payload) {
      state.currentPokemon = payload;
    },
    setCurrentPokemonForms(state, payload) {
      state.currentPokemonForms = payload;
    },
    setCurrentScroll(state, payload) {
      state.currentScroll = payload;
    },
    setHomeFirstRender(state, payload) {
      state.homeFirstRender = payload;
    },
  },
  actions: {
    addPokemonAction({ commit }, payload) {
      commit("addPokemon", payload);
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
    async setCurrentPokemon({ commit }, payload) {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + payload)
        .then((result) => {
          commit("setCurrentPokemon", {
            name: result.data.name,
            id: result.data.id,
            img: result.data.sprites.other.home,
            types: result.data.types,
            height: result.data.height,
            weight: result.data.weight,
            stats: result.data.stats,
            bg_color: result.data.types[0].type.name,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeScrollPaginationValueAction({ commit }, payload) {
      commit("changeScrollPaginationValue", payload);
    },
    clearCurrentPokemon({ commit }) {
      commit("clearCurrentPokemon");
    },
    clearPokemonsAction({ commit }) {
      commit("clearPokemons");
    },
    setCurrentOption({ commit }, payload) {
      commit("setCurrentOption", payload);
    },
    setCurrentPokemonForms({ commit }, payload) {
      commit("setCurrentPokemonForms", payload);
    },
    setCurrentScroll({ commit }, payload) {
      commit("setCurrentScroll", payload);
    },
    setHomeFirstRender({ commit }, payload) {
      commit("setHomeFirstRender", payload);
    },
  },
  getters: {
    getCurrentOption: (state) => state.currentOption,
    getCurrentPokemon: (state) => state.currentPokemon,
    getCurrentPokemonForms: (state) => state.currentPokemonForms,
    getCurrentScroll: (state) => state.currentScroll,
    getHomeFirstRenderValue: (state) => state.homeFirstRender,
    getPokemons: (state) => state.pokemons,
    getScrollPaginationValue: (state) => state.scrollPagination,
  },
});
