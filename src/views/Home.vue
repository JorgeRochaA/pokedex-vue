<template>
  <div class="home">
    <div class="container">
      <SearchBar />
    </div>
    <CardContainer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SearchBar from "../components/SearchBar.vue";
import CardContainer from "../components/CardContainer.vue";
export default {
  name: "Home",
  components: {
    SearchBar,
    CardContainer,
  },
  mounted() {
          this.clearPokemonsAction();
       this.changeScrollPaginationValueAction({
        currentID: 1,
        limit: 5, // max 898
      });
    this.loadPokemonsAction();
  },
  computed: {
    ...mapGetters(["getScrollPaginationValue"]),
  },
  methods: {
    ...mapActions(["loadPokemonsAction","clearPokemonsAction","changeScrollPaginationValueAction"]),
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
