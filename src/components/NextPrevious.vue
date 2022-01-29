<template>
  <div class="spacer">
    <img
      v-if="this.getCurrentPokemon.id > 1 && this.getCurrentPokemon.id < 998"
      class="left"
      src="../assets/arrow-right.svg"
      alt="arrow"
      v-on:click="previous()"
    />
    <img
      v-if="this.getCurrentPokemon.id < 898"
      class="right"
      src="../assets/arrow-right.svg"
      alt="arrow"
      v-on:click="next()"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "nex-previous",
  computed: {
    ...mapGetters(["getCurrentPokemon"]),
  },
  methods: {
    ...mapActions([
      "setCurrentOption",
      "setCurrentPokemon",
      "setCurrentPokemonForms",
    ]),
    async previous() {
      this.$router.push({
        path: `/Pokemon/${this.getCurrentPokemon.id - 1}`,
      });
      await this.reloadPokemon(this.getCurrentPokemon.id - 1);
    },
    next() {
      this.$router.push({
        path: `/Pokemon/${this.getCurrentPokemon.id + 1}`,
      });
      this.reloadPokemon(this.getCurrentPokemon.id + 1);
    },
    reloadPokemon(id) {
      this.setCurrentPokemonForms();
      this.setCurrentPokemon(id);
      this.$route.params.id = id;
      this.setCurrentOption("about");
    },
  },
};
</script>
<style lang="scss" scoped>
.spacer {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    margin-left: 20px;
    height: 35px;
    transform: rotate(-180deg);
    &:hover {
      cursor: pointer;
    }
  }

  .right {
    margin-left: auto;
    margin-right: 20px;
    height: 35px;
    position: relative;
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
