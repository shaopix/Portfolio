<template>
  <div id="header">
    <img src="../assets/logo_portfolio.png"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import MenuSection from "@/types/MenuSection";

export default defineComponent({
  name: "MainMenu",
  methods: {},
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
#header {
  background-color: #1f203a;
  min-height: 100px;
  width: 100%;
  img{
    width: 183px;
  }
}
</style>
