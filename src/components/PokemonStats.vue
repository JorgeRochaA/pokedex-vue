<template>
  <div class="pokemonStats">
    <div class="pokemon_img">
      <div class="img_container" id="img_container">
        <img
          v-if="this.shiny"
          :src="this.img_url.front_shiny"
          :alt="this.data.name"
        />
        <img v-else :src="this.img_url.front_default" :alt="this.data.name" />
      </div>
    </div>
    <div class="stats_container">
      <div class="spacer">
        <button v-on:click="showShiny()">Toggle Shiny</button>
      </div>
      <div class="type_container">
        <div v-for="type in this.data.types" :key="type.slot">
          <div class="type" :class="type.type.name">
            {{ type.type.name }}
          </div>
        </div>
      </div>
      <div class="about_container">
        <h3>About</h3>
        <div class="height_weight_container">
          <div class="height_container">
            <img src="../assets/height_logo.png" alt="" />
            <div>
              <h5>{{ this.dataHeight }} M</h5>
              <h4>Height</h4>
            </div>
          </div>
          <div class="weight_container">
            <img src="../assets/weight_logo.png" alt="" />
            <div>
              <h5>{{ this.dataWeight }} Kg</h5>
              <h4>Weight</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="base_stats_container">
        <div
          class="progress_container"
          v-for="(item, index) in this.data.stats"
          :key="index"
        >
          <svg class="progress" width="50" height="50">
            <circle
              class="progress-circle"
              :class="item.stat.name"
              cx="50"
              cy="50"
              r="30"
              fill="transparent"
              stroke-width="5px"
            />
          </svg>
          <h5>{{ item.stat.name }}</h5>
          <h4>{{ item.base_stat }}%</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pokemonStats",
  props: {
    img_url: null,
    alt_name: null,
    pokemonData: null,
  },
  data() {
    return {
      poke: [],
      statsData: [],
      shiny: false,
    };
  },
  mounted() {
    this.data;
  },
  computed: {
    data() {
      if (this.$props.pokemonData.stats) {
        this.fillStrokeStats();
      }
      return this.$props.pokemonData;
    },
    dataHeight() {
      let num = this.data.height * 0.1;
      return num.toFixed(1);
    },
    dataWeight() {
      let num = this.data.weight * 0.1;
      return num.toFixed(1);
    },
  },
  methods: {
    fillStrokeStats() {
      setTimeout(() => {
        const circle = document.querySelector(".progress-circle");
        let circunference = circle.getTotalLength();
        this.$props.pokemonData.stats.forEach((element) => {
          let stat_circle = document.querySelector("." + element.stat.name);
          let result =
            circunference - (element.base_stat / 100) * circunference;
          if (result >= 0) {
            stat_circle.style.strokeDashoffset = result;
          } else {
            stat_circle.style.strokeDashoffset = 0;
          }
        });
      }, 100);
    },
    showShiny() {
      this.shiny = !this.shiny;
    },
  },
};
</script>
<style scoped lang="scss">
@mixin mb_50px {
  margin-bottom: 50px;
}
@mixin define_height($p_height) {
  height: $p_height !important;
}
@mixin spacer-type_container-type-styles {
  .spacer {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      min-width: 50px;
      padding: 10px;
      border-radius: 5px;
      margin-right: 15px;
      position: relative;
      z-index: 2;
      border: none;
      background-color: #212121;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .type_container {
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    width: 100%;

    .type {
      min-width: 100px;
      padding: 10px;
      border-radius: 5px;
    }
  }
}
@mixin about_style {
  .about_container {
    height: 110px;
    width: 100%;

    h3 {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .height_weight_container {
      height: 70px;
      display: flex;
      .height_container {
        height: 100%;
        width: 50%;
        border-right: 2px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        img {
          height: 50%;
        }
      }
      .weight_container {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
          height: 50%;
        }
      }
    }
  }
}
@mixin base_stats_container-styles($p_height_base_stats_container) {
  .base_stats_container {
    height: $p_height_base_stats_container;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .progress_container {
      height: 100px;
      width: 100px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .progress {
        transform: rotate(270deg);
        height: 100%;
        width: 100%;
      }
      .progress-circle {
        transition: 1s;
        stroke-dasharray: 188;
        stroke-dashoffset: 188;
        &.hp {
          stroke: #53cd5b;
        }
        &.attack {
          stroke: #f6de52;
        }
        &.defense {
          stroke: #ed7f0f;
        }
        &.special-attack {
          stroke: #56b0f1;
        }
        &.special-defense {
          stroke: #ad62f6;
        }
        &.speed {
          stroke: #f06ace;
        }
      }
      h5 {
        position: absolute;
        bottom: -5px;
      }
      h4 {
        position: absolute;
      }
    }
  }
}
.pokemonStats {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pokemon_img {
    margin-top: 30px;
    height: 150px;
    width: 100%;
    position: relative;

    .img_container {
      height: 250px;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0%;
      right: 0;
      margin: auto;
      pointer-events: none;
      img {
        margin-top: 30px;
        height: 100%;
        pointer-events: none;
        position: absolute;
        animation: slide 1s ease 0s 1 normal forwards;
      }
    }
  }

  .stats_container {
    height: 500px;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    @include spacer-type_container-type-styles;
    @include about_style;
    .type_container {
      :first-letter {
        text-transform: uppercase;
      }

      .type {
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
    }
  }
}
@media screen and (min-width: 700px) {
  .img_container {
    justify-content: center;
  }
  .stats_container {
    @include base_stats_container-styles(250px);
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .img_container {
    justify-content: center;
  }
  .stats_container {
    @include mb_50px;
    @include define_height(400px);
    @include spacer-type_container-type-styles;
    @include about_style;
    @include base_stats_container-styles(160px);
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .img_container {
    justify-content: center;
  }
  .stats_container {
    @include mb_50px;
    @include define_height(500px);
    @include spacer-type_container-type-styles;
    @include about_style;
    @include base_stats_container-styles(250px);
    .base_stats_container {
      display: grid;
      grid-template-columns: auto auto auto;
    }
  }
}

@media only screen and (max-width: 575px) {
  .img_container {
    justify-content: flex-start;
  }
  .stats_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mb_50px;
    @include define_height(500px);
    @include spacer-type_container-type-styles;
    @include about_style;
    @include base_stats_container-styles(250px);

    .base_stats_container {
      display: grid;
      grid-template-columns: auto auto auto;
    }
  }
}
// Animation
@keyframes slide {
  0% {
    transform: translateX(-150%);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
