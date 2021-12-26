<template>
  <div class="home">
    <Navbar />
    <SearchBar />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    SearchBar,
  },
};
</script>
