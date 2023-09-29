<template>
  <div class="couronne-profil">
    <img src="../assets/shao_profil.png" alt="" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainSection",
  methods: {},
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
.couronne-profil {
  width: 422px;
  height: 422px;
  border-radius: 422px;
  background-color: white;
  text-align: center;
  padding: 10px;
  position: relative;
  top: 60px;
}
img {
  border-radius: 422px;
  width: 422px;
}
</style>
