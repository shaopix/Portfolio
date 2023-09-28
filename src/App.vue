<template>
  <div class="app">
    <div class="container-menu">
      <MainMenu :menu-sections="menuItems"></MainMenu>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainMenu from "./components/MainMenu.vue";
import MenuSection from "./types/MenuSection";

export default defineComponent({
  name: "App",
  components: {
    MainMenu,
  },
  setup() {
    const menuItems: Array<MenuSection> = [
      {
        name: "section 1",
        items: [
          {
            name: "label 1",
            anchor: "anchor1",
          },
          {
            name: "label 2",
            anchor: "anchor2",
          },
          {
            name: "label 3",
            anchor: "anchor3",
          },
        ],
      },
      {
        name: "section 2",
        items: [
          {
            name: "label 4",
            anchor: "anchor4",
          },
          {
            name: "label 5",
            anchor: "anchor5",
          },
          {
            name: "label 6",
            anchor: "anchor6",
          },
        ],
      },
      {
        name: "section 3",
        items: [
          {
            name: "label 7",
            anchor: "anchor7",
          },
          {
            name: "label 8",
            anchor: "anchor8",
          },
          {
            name: "label 9",
            anchor: "anchor9",
          },
        ],
      },
    ];
    return {
      menuItems,
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
