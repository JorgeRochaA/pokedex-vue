<template>
  <div class="navbar">
    <div class="logo_container">
      <img src="../assets/navbarLogo/Pokeball.svg" alt="logo" />
      <h3>Pokédex</h3>
    </div>
    <div class="filter_container">
      <img
        v-if="this.getFilterValue"
        src="../assets/filterLogos/byNumber.svg"
        alt="filterByNumber"
        v-on:click="filter()"
        id="filter"
      />
      <img
        v-else
        src="../assets/filterLogos/byName.svg"
        alt="filterByName"
        v-on:click="filter()"
        id="filter"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["getFilterValue"]),
  },
  methods: {
    ...mapActions(["sortPokemonsAction", "changeFilterValueAction"]),
    filter() {
      this.changeFilterValueAction(!this.getFilterValue);
      let filter = document.getElementById("filter");
      filter.classList.add("filtering");

      setTimeout(() => {
        filter.classList.remove("filtering");
      }, 500);

      if (this.getFilterValue == true) {
        this.sortPokemonsAction("name");
      } else if (this.getFilterValue == false) {
        this.sortPokemonsAction("number");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.navbar {
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .logo_container {
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      height: 50px;
    }
  }

  .filter_container {
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: flex-end;

    img {
      height: 50px;
      width: 50px;
      border-radius: 10px;
      transition: 0.5s;

      &:hover {
        cursor: pointer;
      }

      &.filtering {
        animation: filtering 0.5s 1;
      }
    }
  }
}

@keyframes filtering {
  25% {
    transform: translateY(100px);
  }
}
</style>
