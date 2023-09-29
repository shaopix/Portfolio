<template>
  <div id="header">
    <img src="../assets/logo_portfolio.png"/>
    <MainMenu></MainMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainMenu from "../components/MainMenu.vue";

export default defineComponent({
  name: "HeaderApp",
  methods: {},
  components:{
    MainMenu
  }
});
</script>
<style scoped lang="scss">
@font-face {
  font-family: "Bukhari Script";
  src: url('../assets/fonts/Bukhari\ Script.ttf');
}
#header {
  background-color: #1f203a;
  min-height: 100px;
  width: 100%;
  font-family: Bukhari Script;
  display: flex;
  img{
    width: 183px;
  }
}
</style>
