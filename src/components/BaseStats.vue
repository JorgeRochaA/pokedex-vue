<template>
  <div class="base_stats_container">
    <div
      class="progress_container"
      v-for="(poke_stat, index) in this.getCurrentPokemon.stats"
      :key="index"
    >
      <svg class="progress" width="50" height="50">
        <circle
          class="progress-circle"
          :class="poke_stat.stat.name"
          cx="50"
          cy="50"
          r="30"
          fill="transparent"
          stroke-width="5px"
        />
      </svg>
      <h5>{{ poke_stat.stat.name }}</h5>
      <h4>{{ poke_stat.base_stat }}%</h4>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "baseStats",
  mounted() {
    setTimeout(() => {
      this.fillStrokeStats();
    }, 200);
  },
  computed: {
    ...mapGetters(["getCurrentPokemon"]),
  },
  watch: {
    getCurrentPokemon: function () {
      setTimeout(() => {
        this.fillStrokeStats();
      }, 100);
    },
  },
  methods: {
    fillStrokeStats() {
      const circle = document.querySelector(".progress-circle");
      let circunference = circle.getTotalLength();
      this.getCurrentPokemon.stats.forEach((element) => {
        let stat_circle = document.querySelector("." + element.stat.name);
        let result = circunference - (element.base_stat / 100) * circunference;
        if (result >= 0) {
          stat_circle.style.strokeDashoffset = result;
        } else {
          stat_circle.style.strokeDashoffset = 0;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.base_stats_container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

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
      stroke-dasharray: 189;
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
@media screen and (min-width: 700px) {
  .base_stats_container {
    height: 250px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .base_stats_container {
    height: 160px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .base_stats_container {
    height: 250px;
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
@media only screen and (max-width: 575px) {
  .base_stats_container {
    height: 250px;
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
</style>
