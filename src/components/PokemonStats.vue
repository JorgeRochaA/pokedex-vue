<template>
  <div class="pokemonStats">
    <div class="pokemon_img">
      <img
        class="pokeball"
        src="../assets/pokeball-roll.png"
        alt="pokeball"
        id="poke"
      />
      <div class="img_container" id="img_container">
        <img :src="img_url" alt="" />
      </div>
    </div>
    <div class="stats_container"></div>
  </div>
</template>
<script>
export default {
  name: "pokemonStats",
  props: {
    img_url: null,
    alt_name: null,
  },
  mounted() {
    document.getElementById("img_container").style.display = "none";
    setTimeout(() => {
         document.getElementById("img_container").style.display = "flex";
    }, 200);
    setTimeout(() => {
      let pokeball = document.getElementById("poke");
      pokeball.style.display = "none";
    }, 2000);
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
.pokemonStats {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pokemon_img {
    margin-top: 30px;
    height: 75px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .pokeball {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      animation: fall 0.25s ease-in-out, spin 1000ms linear infinite,
        moveLeftToRight 2s linear infinite;
      position: absolute;
      top: 0;
    }

    .img_container {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    }
  }

  .stats_container {
    height: 500px;
    width: 100%;
    border-radius: 10px;
    background-color: white;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) and (orientation: landscape) {
  .stats_container {
    @include mb_50px;
    @include define_height(300px);
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .stats_container {
    @include mb_50px;
    @include define_height(300px);
  }
}

@media only screen and (max-width: 575px) {
  .stats_container {
    @include mb_50px;
    @include define_height(500px);
  }
}
// Animation
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes moveLeftToRight {
  0% {
    left: 40%;
  }
  100% {
    left: 100%;
  }
}
@keyframes fall {
  0% {
    top: -200px;
  }
  60% {
    top: 0;
  }
  80% {
    top: -20px;
  }
  100% {
    top: 0;
  }
}
</style>
