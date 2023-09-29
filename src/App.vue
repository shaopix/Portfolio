<template>
  <div class="app">
    <div class="container-menu">
      <HeaderApp></HeaderApp>
    </div>
    <div>
      <ContainerSection background-color="#f2f2f2" justify-content="center">
        <ImageProfil></ImageProfil>
      </ContainerSection>
      <ContainerSection background-color="#ffffff" justify-content="center">
        <section class="principal-titre-container">
          <h1 class="principal-title">
            <span class="bold">Portfolio</span> d'Alexandre Annequin
          </h1>
          <p class="sumarry-page">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mollis a urna nec maximus.
            <br />Suspendisse eleifend vel leo sit amet suscipit. Etiam vel
            nulla nisi. Sed auctor diam sit amet nunc volutpat tincidunt.
            <br />Vivamus sed sem sed tellus consequat consectetur. Aliquam sem
            magna, pellentesque sed scelerisque sed, tincidunt maximus enim.
            
          </p>
        </section>
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
    ImageProfil,
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
.principal-titre-container {
  position: relative;
  top: 115px;
  text-align: center;
  .principal-title {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 40px;
    text-transform: uppercase;
    .bold {
      font-weight: bold;
    }
    
  }
  .sumarry-page {
      width: 650px;
      text-align: justify;
    }
}
</style>
