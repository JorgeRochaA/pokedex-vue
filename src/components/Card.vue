<template>
  <div class="card" :class="colorName" v-on:click="moreInfo()">
    <div class="name_id_container">
      <h3>{{ name }}</h3>
      <h4>#{{ id }}</h4>
    </div>
    <div class="types_img_container">
      <div class="img_poke_container">
        <img class="poke_img" :src="img" :alt="name" />
        <img
          class="pokeball_info"
          src="../assets/Pokeball_Info.svg"
          alt="pokeball_info"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  props: {
    id: null,
    img: null,
    name: null,
    colorName: null,
    types: null,
  },
  methods: {
    ...mapActions(["setHomeFirstRender","setCurrentScroll"]),
    moreInfo() {
      this.setHomeFirstRender(false);
      this.setCurrentScroll(window.scrollY);
      this.$router.push("Pokemon/" + this.id);
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  height: 200px;
  width: 300px;
  margin: 15px 0;
  border-radius: 10px;
  overflow: hidden;
   &:hover{
     cursor: pointer;
   }
  .name_id_container {
    height: 75px;
    pointer-events: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;

    :first-letter {
      text-transform: uppercase;
    }
  }
  .types_img_container {
    height: 125px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    pointer-events: none;

    .img_poke_container {
      height: 100%;
      width: 60%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      pointer-events: none;
      position: relative;
      .poke_img {
        pointer-events: none;
        height: 90%;
        margin-right: 10px;
      }

      .pokeball_info {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 210%;
        transform: rotate(330deg);
      }
    }
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
@media screen and (min-width: 910px) and (max-width: 1199px) {
  .card {
    height: 130px;
    width: 195px;

    .name_id_container {
      height: 40px;
    }
    .types_img_container {
      height: 90px;
    }
  }
}
@media only screen and (max-width: 575px) {
  .card {
    height: 110px;
    width: 160px;

    .name_id_container {
      height: 40px;
      font-size: 10px;
    }
    .types_img_container {
      height: 70px;
      width: 100%;

      .img_poke_container {
        .pokeball_info {
          height: 200%;
          transform: rotate(320deg);
        }
      }
    }
  }
}
</style>
