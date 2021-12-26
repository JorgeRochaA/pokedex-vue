<template>
  <div class="navbar">
    <div class="logo_container">
      <img src="../assets/navbarLogo/Pokeball.svg" alt="logo" />
      <h3>Pokédex</h3>
    </div>
    <div class="filter_container">
      <img src="../assets/filterLogos/byNumber.svg" alt="filterByNumber" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped lang="scss">
.navbar {
  height: 75px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);

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
      height: 100%;
    }
  }
}
</style>
