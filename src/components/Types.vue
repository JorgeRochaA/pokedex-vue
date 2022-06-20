<template>
  <div class="type_container">
    <img
      v-for="type in this.getCurrentPokemon.types"
      :key="type.slot"
      :src="require(`../assets/badges/${type.type.name}.svg`)"
      :alt="type.type.name"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "typesContainer",
  computed: {
    ...mapGetters(["getCurrentPokemon"]),
  },
};
</script>
<style lang="scss" scoped>
.type_container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  gap: 10px;
  img {
    height: 40px;
  }
}
</style>
