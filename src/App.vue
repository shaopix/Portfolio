<template>
  <div class="app">
    <div class="container-menu">
      <HeaderApp></HeaderApp>
      <MainSection></MainSection>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderApp from "./components/HeaderApp.vue";
import MainSection from "./components/MainSection.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderApp,
    MainSection
  },
  setup() {
    
    return {
    };
  },
});
</script>

<style src="../src/assets/global.css"></style>
<style lang="scss">
body {
  margin: 0;
}
.container-menu {
  display: flex;
  margin: 0;
}
</style>
