<template>
  <div class="menu">
    <div class="menu__link">Acceuil</div>
    <summary class="menu__link">Exemple</summary>
    <div class="menu__link">Contact</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMenu",
  methods: {},
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
.menu{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;
  .menu__link{
    font-size: 25px;
    height: 100%;
    color: #f6f3e4;
    cursor: pointer;
  }
}
</style>
