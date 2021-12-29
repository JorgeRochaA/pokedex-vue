<template>
  <div class="home">
    <div class="container">
      <Navbar />
      <SearchBar />
    </div>
    <CardContainer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "../components/Navbar.vue";
import SearchBar from "../components/SearchBar.vue";
import CardContainer from "../components/CardContainer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    SearchBar,
    CardContainer,
  },
  mounted() {
    this.loadPokemonsAction();
  },
  computed: {
    ...mapGetters(["getScrollPaginationValue"]),
  },
  methods: {
    ...mapActions(["loadPokemonsAction"]),
  },
};
</script>
<style scoped lang="scss">
.container {
  position: sticky;
  top: 0;
  background-color: white;
}
</style>
