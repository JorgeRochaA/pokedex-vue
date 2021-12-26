<template>
  <div class="card" :class="colorName">
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
};
</script>
<style scoped lang="scss">
.card {
  &.normal {
    color: #a8a77a;
    border-color: #a8a77a;
  }

  &.fire {
    color: #ee8130;
    border-color: #ee8130;
  }

  &.water {
    color: #6390f0;
    border-color: #6390f0;
  }

  &.electric {
    color: #f7d02c;
    border-color: #f7d02c;
  }

  &.grass {
    color: #7ac74c;
    border-color: #7ac74c;
  }

  &.ice {
    color: #96d9d6;
    border-color: #96d9d6;
  }

  &.fighting {
    color: #c22e28;
    border-color: #c22e28;
  }

  &.poison {
    color: #a33ea1;
    border-color: #a33ea1;
  }

  &.ground {
    color: #e2bf65;
    border-color: #e2bf65;
  }

  &.flying {
    color: #a98ff3;
    border-color: #a98ff3;
  }

  &.psychic {
    color: #f95587;
    border-color: #f95587;
  }

  &.bug {
    color: #a6b91a;
    border-color: #a6b91a;
  }

  &.rock {
    color: #b6a136;
    border-color: #b6a136;
  }

  &.ghost {
    color: #735797;
    border-color: #735797;
  }

  &.dragon {
    color: #6f35fc;
    border-color: #6f35fc;
  }

  &.dark {
    color: #705746;
    border-color: #705746;
  }

  &.steel {
    color: #b7b7ce;
    border-color: #b7b7ce;
  }

  &.fairy {
    color: #d685ad;
    border-color: #d685ad;
  }
  
  .name {
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
@media only screen and (min-width: 1200px) {
}
/* Escritorio grande */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

/* Escritorio pequeño / tablet */
@media only screen and (min-width: 768px) and (max-width: 991px) {
}

/* Tablets y phablets */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Teléfonos */
@media only screen and (max-width: 575px) {
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

      h3 {
        margin-right: 20px;
      }
    }

    .image {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 150%;
        margin-bottom: 35px;
      }
    }

    .name {
      height: 31%;
      width: 101%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #70559b;
      color: white;
    }
  }
}
</style>
