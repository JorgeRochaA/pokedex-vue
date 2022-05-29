<template>
  <div class="home">
    <div class="container">
      <!-- <SearchBar /> -->
    </div>
    <CardContainer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardContainer from "../components/CardContainer.vue";
// import SearchBar from "../components/SearchBar.vue";
export default {
  name: "Home",
  components: {
    CardContainer,
    // SearchBar,
  },
  mounted() {
    if (this.getHomeFirstRenderValue) {
      this.loadPokemonsUrl("https://pokeapi.co/api/v2/pokemon/");
    } else {
      window.scrollTo(0, this.getCurrentScroll);
    }
    this.setCurrentOption("about");
    window.addEventListener("scroll", this.addEvent);
  },
  destroyed() {
    window.removeEventListener("scroll", this.addEvent);
  },
  computed: {
    ...mapGetters([
      "getHomeFirstRenderValue",
      "getRemoveScrollEventValue",
      "getNextUrl",
      "getCurrentScroll",
    ]),
  },
  watch: {
    getRemoveScrollEventValue() {
      if (!this.getRemoveScrollEventValue) {
        window.addEventListener("scroll", this.addEvent);
      } else {
        window.removeEventListener("scroll", this.addEvent);
      }
    },
  },
  methods: {
    ...mapActions([
      "setCurrentOption",
      "setRemoveScrollEvent",
      "loadPokemonsUrl",
    ]),
    addEvent() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight - 100;
      const scrolled = window.scrollY;

      if (Math.ceil(scrolled) >= scrollable) {
        this.loadPokemonsUrl(this.getNextUrl);
        this.setRemoveScrollEvent(true);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  height: 75px;
  position: sticky;
  top: 0;
  z-index: 5;
  background: white;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>
