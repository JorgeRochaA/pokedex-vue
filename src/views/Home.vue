<template>
  <div class="home">
    <div class="container">
      <SearchBar />
    </div>
    <CardContainer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardContainer from "../components/CardContainer.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "Home",
  components: {
    CardContainer,
    SearchBar,
  },
  mounted() {
    if (this.getHomeFirstRenderValue) {
      this.loadPokemonsAction();
    } else {
      window.scrollTo(0, this.getCurrentScroll);
    }
    this.setCurrentOption("about");
  },
  computed: {
    ...mapGetters(["getHomeFirstRenderValue", "getCurrentScroll"]),
  },
  methods: {
    ...mapActions(["loadPokemonsAction", "setCurrentOption"]),
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
