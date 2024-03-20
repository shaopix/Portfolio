<template>
  <div>
    <!-- <div class="container-second">
      <DemonSlayerGame />
      <hr>
      <GuessNumber />
    </div> -->
    <FarmVille />
  </div>
</template>

<script lang="ts">
import FarmVille from "@/components/FarmVille.vue";
import { defineComponent } from "vue";
import DemonSlayerGame from "@/components/DemonSlayerGame.vue";
import GuessNumber from "@/components/GuessNumber.vue";

export default defineComponent({
  name: "ComposableView",
  components: {
    // DemonSlayerGame,
    // GuessNumber,
    FarmVille
  },
});
</script>

<style scoped lang="scss">
.container-second {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
  }

}
</style>