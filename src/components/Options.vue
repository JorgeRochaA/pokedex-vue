<template>
  <div class="options">
    <h3
      class="about active"
      :class="this.getCurrentPokemon.bg_color"
      v-on:click="changeOption('about')"
    >
      About
    </h3>
    <!--
    <h3
      class="forms"
      :class="this.getCurrentPokemon.bg_color"
      v-on:click="changeOption('forms')"
    >
      Forms
    </h3>
    <h3
      class="mega"
      :class="this.getCurrentPokemon.bg_color"
      v-on:click="changeOption('mega')"
    >
      Mega
    </h3>
    <h3
      class="giga"
      :class="this.getCurrentPokemon.bg_color"
      v-on:click="changeOption('giga')"
    >
      Giga-Max
    </h3>
-->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "options",
  computed: {
    ...mapGetters(["getCurrentOption", "getCurrentPokemon"]),
  },
  watch: {
    getCurrentOption: function () {
      let all_h3 = document.querySelectorAll("h3");
      all_h3.forEach((element) => {
        element.classList.remove("active");
      });
      let option_h3 = document.querySelector("." + this.getCurrentOption);
      option_h3.classList.add("active");
    },
  },
  methods: {
    ...mapActions(["setCurrentOption"]),
    changeOption(option) {
      this.setCurrentOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.options {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "SF Pro Display";
  h3 {
    &.active {
      &.normal {
        color: #a8a77a;
      }
      &.fire {
        color: #fd7d24;
      }
      &.water {
        color: #4a90da;
      }
      &.electric {
        color: #f7d02c;
      }
      &.grass {
        color: #62b957;
      }
      &.ice {
        color: #96d9d6;
      }
      &.fighting {
        color: #c22e28;
      }
      &.poison {
        color: #a33ea1;
      }
      &.ground {
        color: #e2bf65;
      }
      &.flying {
        color: #748fc9;
      }
      &.psychic {
        color: #f95587;
      }
      &.bug {
        color: #a6b91a;
      }
      &.rock {
        color: #b6a136;
      }
      &.ghost {
        color: #735797;
      }
      &.dragon {
        color: #0f6ac0;
      }
      &.dark {
        color: #58575f;
      }
      &.steel {
        color: #417d9a;
      }
      &.fairy {
        color: #ed6ec7;
      }
    }
  }
}
</style>
