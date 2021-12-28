<template>
  <div class="card" :class="colorName" v-on:click="getColor()">
    <div class="number">
      <h3>#{{ id }}</h3>
    </div>
    <div class="image">
      <img :src="img" :alt="name" />
    </div>
    <div class="name" :class="colorName">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    id: null,
    img: null,
    name: null,
    colorName: null,
  },
  methods: {
    getColor() {
      localStorage.setItem("colorName", this.colorName);
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
  border: 3px solid transparent;
  border-radius: 10px;
  overflow: hidden;

  .number {
    height: 20%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    
    h3 {
      margin-right: 20px;
    }
  }

  .image {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    img {
      height: 110%;
      margin-bottom: 20px;
    }
  }

  .name {
    height: 31%;
    width: 101%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

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

  &.normal {
    color: #a8a77a;
    border-color: #a8a77a;
    background-color: #a8a77a;
  }

  &.fire {
    color: #ee8130;
    border-color: #ee8130;
    background-color: #ee8130;
  }

  &.water {
    color: #6390f0;
    border-color: #6390f0;
    background-color: #6390f0;
  }

  &.electric {
    color: #f7d02c;
    border-color: #f7d02c;
    background-color: #f7d02c;
  }

  &.grass {
    color: #7ac74c;
    border-color: #7ac74c;
    background-color: #7ac74c;
  }

  &.ice {
    color: #96d9d6;
    border-color: #96d9d6;
    background-color: #96d9d6;
  }

  &.fighting {
    color: #c22e28;
    border-color: #c22e28;
    background-color: #c22e28;
  }

  &.poison {
    color: #a33ea1;
    border-color: #a33ea1;
    background-color: #a33ea1;
  }

  &.ground {
    color: #e2bf65;
    border-color: #e2bf65;
    background-color: #e2bf65;
  }

  &.flying {
    color: #a98ff3;
    border-color: #a98ff3;
    background-color: #a98ff3;
  }

  &.psychic {
    color: #f95587;
    border-color: #f95587;
    background-color: #f95587;
  }

  &.bug {
    color: #a6b91a;
    border-color: #a6b91a;
    background-color: #a6b91a;
  }

  &.rock {
    color: #b6a136;
    border-color: #b6a136;
    background-color: #b6a136;
  }

  &.ghost {
    color: #735797;
    border-color: #735797;
    background-color: #735797;
  }

  &.dragon {
    color: #6f35fc;
    border-color: #6f35fc;
    background-color: #6f35fc;
  }

  &.dark {
    color: #705746;
    border-color: #705746;
    background-color: #705746;
  }

  &.steel {
    color: #b7b7ce;
    border-color: #b7b7ce;
    background-color: #b7b7ce;
  }

  &.fairy {
    color: #d685ad;
    border-color: #d685ad;
    background-color: #d685ad;
  }
}
@media screen and (min-width: 910px) and (max-width: 1199px) {
  .card {
    height: 130px;
    width: 195px;
  }
}
</style>
