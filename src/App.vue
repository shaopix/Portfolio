<template>
  <div class="app">
    <div class="container-menu">
      <HeaderApp></HeaderApp>
    </div>
    <div>
      <ContainerSection background-color="#f2f2f2">
        <ImageProfil></ImageProfil>
      </ContainerSection>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderApp from "./components/HeaderApp.vue";
import ContainerSection from "./components/ContainerSection.vue";
import ImageProfil from "./components/ImageProfil.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderApp,
    ContainerSection,
    ImageProfil
},
  setup() {
    return {};
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
