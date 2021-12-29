<template>
  <div class="infoNavbar">
    <div class="arrow_container" v-on:click="goBack()">
      <img src="../assets/arrow-left.svg" alt="go_back" />
    </div>
    <div class="name_container">
      <h2>{{ name }}</h2>
    </div>
    <div class="number_container">
      <h3>#{{ id }}</h3>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "infoNavbar",
  props: {
    name: null,
    id: null,
  },
  methods: {
    ...mapActions(["clearPokemonsAction","changeScrollPaginationValueAction"]),
    goBack() {
      this.clearPokemonsAction();
       this.changeScrollPaginationValueAction({
        currentID: 1,
        limit: 5, // max 898
      });
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="scss">
@mixin display_flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.infoNavbar {
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  .arrow_container {
    height: 100%;
    width: 30%;
    transition: 0.5s;
    @include display_flex;

    img {
      height: 60%;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .name_container {
    height: 100%;
    width: 40%;
    @include display_flex;

    :first-letter {
      text-transform: uppercase;
    }
  }

  .number_container {
    height: 100%;
    width: 30%;
    @include display_flex;
  }
}
</style>
