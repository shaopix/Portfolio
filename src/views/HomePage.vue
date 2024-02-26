<template>
  <div class="Home">
    <section class="principal-container">
      <h1 class="principal-title">
        <span class="bold">Portfolio</span> d'Alexandre Annequin
      </h1>
      <div class="joke-container">
        <div class="question-container">
          <span>{{ question }}</span>
        </div>
        <div class="answer-container">
          <span v-show="reveal">{{ answer }}</span>
        </div>
        <div>
          <button @click="getJoke()">Click get a Joke</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useJoke from "@/composables/useJoke";

export default defineComponent({
  name: "App",
  components: {
    
  },
  setup() {
    const { reveal, question, answer, getJoke } = useJoke();

    return { reveal, question, answer, getJoke };
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
.container-menu {
  display: flex;
  margin: 0;
}
.principal-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  .principal-title {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 3rem;
    width: 554px;
    text-transform: uppercase;
    align-self: center;
    .bold {
      font-weight: bold;
    }
  }
  .joke-container {
    height: 200px;
    .question-container {
      vertical-align: middle;
      height: 40px;
    }
    .answer-container {
      vertical-align: middle;
      height: 40px;
    }
  }
  .sumarry-page {
    text-align: justify;
    padding-bottom: 100px;
    width: 543px;
  }
  .subline {
    text-decoration: underline;
  }
}
</style>
