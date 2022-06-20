<template>
  <div class="about_container">
    <div class="height_container">
      <img src="../assets/height_logo.png" alt="height_logo" />
      <div>
        <h5>{{ (this.getCurrentPokemon.height * 0.1).toFixed(1) }} M</h5>
        <h4>Height</h4>
      </div>
    </div>
    <div class="weight_container">
      <img src="../assets/weight_logo.png" alt="weight_logo" />
      <div>
        <h5>{{ (this.getCurrentPokemon.weight * 0.1).toFixed(1) }} Kg</h5>
        <h4>Weight</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "aboutPokemon",
  computed: {
    ...mapGetters(["getCurrentPokemon"]),
  },
};
</script>
<style lang="scss" scoped>
.about_container {
  height: 75px;
  width: 100%;
  display: flex;
  font-family: "SF Pro Display";
  .height_container {
    height: 100%;
    width: 50%;
    border-right: 2px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    img {
      height: 35%;
    }
    div {
      margin-right: 25px;
    }
  }
  .weight_container {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    img {
      height: 35%;
      margin-left: 25px;
    }
  }
}
</style>
