<template>
<div class="container-second">
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
  </div>
</template>
<script>
import useJoke from "@/composables/useJoke";

 setup() {
    const { reveal, question, answer, getJoke } = useJoke();

    return { reveal, question, answer, getJoke };
  }
</script>