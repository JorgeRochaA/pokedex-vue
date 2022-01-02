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

import SearchBar from "../components/SearchBar.vue";
import CardContainer from "../components/CardContainer.vue";
export default {
  name: "Home",
  components: {
    SearchBar,
    CardContainer,
  },
  mounted() {
    if (!this.getHomeFirstRenderValue) {
      window.scrollTo(0, this.getCurrentScroll);
    }
    this.setCurrentOption("about");
    this.setCurrentPokemonForms();
  },
  computed: {
    ...mapGetters(["getHomeFirstRenderValue","getCurrentScroll","getScrollPaginationValue"]),
  },
  methods:{
    ...mapActions(["changeScrollPaginationValueAction","loadPokemonsAction","setCurrentOption","setCurrentPokemonForms"]),
  }
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
