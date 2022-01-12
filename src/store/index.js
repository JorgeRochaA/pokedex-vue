import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    scrollPagination: {
      currentID: 1,
      limit: 10, // max 898
    },
    currentPokemon: {
      name: "",
      id: 0,
      img: [],
      types: [],
      height: 0,
      weight: 0,
      stats: [],
      bg_color: "",
    },
    currentPokemonForms: [],
    homeFirstRender: true,
    currentScroll: 0,
    currentOption: "about",
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
    setHomeFirstRender(state, payload) {
      state.homeFirstRender = payload;
    },
    setCurrentPokemonForms(state, payload) {
      state.currentPokemonForms = payload;
    },
    setCurrentScroll(state, payload) {
      state.currentScroll = payload;
    },
    setCurrentOption(state, payload) {
      state.currentOption = payload;
    },
    clearCurrentPokemon(state) {
      state.currentPokemon = {
        name: "",
        id: 0,
        img: [],
        types: [],
        height: 0,
        weight: 0,
        stats: [],
        bg_color: "",
      };
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
    setHomeFirstRender({ commit }, payload) {
      commit("setHomeFirstRender", payload);
    },
    setCurrentPokemonForms({ commit }, payload) {
      commit("setCurrentPokemonForms", payload);
    },
    setCurrentScroll({ commit }, payload) {
      commit("setCurrentScroll", payload);
    },
    setCurrentOption({ commit }, payload) {
      commit("setCurrentOption", payload);
    },
    clearCurrentPokemon({commit}){
commit("clearCurrentPokemon");
    }
  },
  getters: {
    getPokemons: (state) => state.pokemons,
    getScrollPaginationValue: (state) => state.scrollPagination,
    getCurrentPokemon: (state) => state.currentPokemon,
    getHomeFirstRenderValue: (state) => state.homeFirstRender,
    getCurrentPokemonForms: (state) => state.currentPokemonForms,
    getCurrentScroll: (state) => state.currentScroll,
    getCurrentOption: (state) => state.currentOption,
  },
});
