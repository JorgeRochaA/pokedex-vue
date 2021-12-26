<template>
  <div class="searchBar">
    <input type="text" placeholder="🔎  Search By Name"/>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
};
</script>
<style scoped lang="scss">
.searchBar {
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input {
    height: 65%;
    width: 90%;
    text-align: center;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:focus{
       outline: none;
    }
  }
}
</style>
