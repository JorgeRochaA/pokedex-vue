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
        color: #ee8130;
      }

      &.water {
        color: #6390f0;
      }

      &.electric {
        color: #f7d02c;
      }

      &.grass {
        color: #7ac74c;
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
        color: #a98ff3;
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
        color: #6f35fc;
      }

      &.dark {
        color: #705746;
      }

      &.steel {
        color: #b7b7ce;
      }

      &.fairy {
        color: #d685ad;
      }
    }
  }
}
</style>
