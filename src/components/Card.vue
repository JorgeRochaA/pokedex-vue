<template>
  <div class="card" :class="colorName" v-on:click="moreInfo()">
    <div class="card_info_container">
      <img class="pattern" src="../assets/Pattern.png" alt="pattern" />
      <div class="pokemon_number" v-if="id < 10">#00{{ id }}</div>
      <div class="pokemon_number" v-if="id > 9 && id < 100">#0{{ id }}</div>
      <div class="pokemon_number" v-if="id >= 100">#{{ id }}</div>
      <div class="pokemon_name">{{ name }}</div>
      <div class="pokemon_type">
        <div v-for="(type, index) in types" :key="index">
          <img
            :src="require(`../assets/badges/${type.type.name}.svg`)"
            :alt="type.type.name"
          />
        </div>
      </div>
    </div>
    <div class="card_image_container">
      <img class="pokeball" src="../assets/Pokeball_Info.svg" alt="pokeball" />
      <img class="pokemon_image" :src="img" :alt="name" />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  props: {
    colorName: null,
    id: null,
    img: null,
    name: null,
    types: null,
  },
  methods: {
    ...mapActions(["setHomeFirstRender", "setCurrentScroll"]),
    moreInfo() {
      this.setHomeFirstRender(false);
      this.setCurrentScroll(window.scrollY);
      this.$router.push("Pokemon/" + this.id);
    },
  },
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: "SF Pro Display";
  src: url("../fonts/SFProDisplay/SFProDisplay.ttf");
}
.card {
  width: 334px;
  height: 115px;
  border-radius: 10px;
  display: flex;
  font-family: "SF Pro Display";
  font-style: normal;
  transition: 0.5s;
  overflow: hidden;
  .card_info_container {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    .pattern {
      position: absolute;
      width: 74px;
      height: 32px;
      top: 10px;
      right: 0;
    }
    .pokemon_number {
      font-weight: 700;
      font-size: 20px;
      line-height: 14px;
      color: rgba(23, 23, 27, 0.6);
      margin-left: 20px;
      margin-top: 20px;
      margin-bottom: 5px;
    }
    .pokemon_name {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #ffffff;
      margin-left: 20px;
      width: 334px;
      text-align: left;
      position: relative;
      z-index: 2;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    .pokemon_type {
      display: flex;
      margin-top: 5px;
      margin-left: 20px;
      img {
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 3px;
        &:first-child {
          margin-right: 5px;
        }
      }
    }
  }
  .card_image_container {
    height: 100%;
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .pokeball {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 210%;
      transform: rotate(330deg);
    }
    .pokemon_image {
      height: 90%;
      margin-left: 35%;
    }
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &.normal {
    background-color: #a8a77a;
  }
  &.fire {
    background-color: #ee8130;
  }
  &.water {
    background-color: #6390f0;
  }
  &.electric {
    background-color: #f7d02c;
  }
  &.grass {
    background-color: #7ac74c;
  }
  &.ice {
    background-color: #96d9d6;
  }
  &.fighting {
    background-color: #c22e28;
  }
  &.poison {
    background-color: #a33ea1;
  }
  &.ground {
    background-color: #e2bf65;
  }
  &.flying {
    background-color: #a98ff3;
  }
  &.psychic {
    background-color: #f95587;
  }
  &.bug {
    background-color: #a6b91a;
  }
  &.rock {
    background-color: #b6a136;
  }
  &.ghost {
    background-color: #735797;
  }
  &.dragon {
    background-color: #6f35fc;
  }
  &.dark {
    background-color: #705746;
  }
  &.steel {
    background-color: #b7b7ce;
  }
  &.fairy {
    background-color: #d685ad;
  }
}
</style>
