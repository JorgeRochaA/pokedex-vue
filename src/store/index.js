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
    nextUrl: "",
    removeScrollEvent: false,
  },
  mutations: {
    addPokemon(state, payload) {
      state.pokemons = [...state.pokemons, payload];
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
    setNextUrl(state, payload) {
      state.nextUrl = payload;
    },
    setRemoveScrollEvent(state, payload) {
      state.removeScrollEvent = payload;
    },
  },
  actions: {
    addPokemonAction({ commit }, payload) {
      commit("addPokemon", payload);
    },
    async loadPokemonsUrl({ commit, dispatch }, url) {
      if (url == "https://pokeapi.co/api/v2/pokemon/?offset=900&limit=20") {
        return;
      }
      await axios
        .get(url)
        .then((res) => {
          commit("setNextUrl", res.data.next);
          dispatch("loadPokemonsAction", res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async loadPokemonsAction({ commit }, payload) {
      for (let pokemon of payload) {
        await axios
          .get(pokemon.url)
          .then((res) => {
            if (res.data.id == 10001 || res.data.id == 10002) {
              return;
            }
            if (res.data.id == 718) {
              res.data.sprites.other = {
                home: {
                  front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10119.png",
                },
              };
            }
            commit("addPokemon", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      commit("setRemoveScrollEvent", false);
    },
    async setCurrentPokemon({ commit }, payload) {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + payload)
        .then((result) => {
          commit("setCurrentPokemon", {
            name: result.data.name,
            id: result.data.id,
            img:
              payload == 718
                ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10119.png"
                : result.data.sprites.other.home.front_default,
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
    setRemoveScrollEvent({ commit }, payload) {
      commit("setRemoveScrollEvent", payload);
    },
  },
  getters: {
    getCurrentOption: (state) => state.currentOption,
    getCurrentPokemon: (state) => state.currentPokemon,
    getCurrentPokemonForms: (state) => state.currentPokemonForms,
    getCurrentScroll: (state) => state.currentScroll,
    getHomeFirstRenderValue: (state) => state.homeFirstRender,
    getPokemons: (state) => state.pokemons,
    getNextUrl: (state) => state.nextUrl,
    getRemoveScrollEventValue: (state) => state.removeScrollEvent,
  },
});
