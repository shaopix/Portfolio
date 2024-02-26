<template>
  <div>
    <div class="container-second">
      <h1>Seconde Page</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "ExempleSecond",
});
</script>
<style scoped lang="scss">

.container-second{
    width: 400px;
    text-align: center;
}
</style>
