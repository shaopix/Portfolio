import { ref } from "vue";
import axios from "axios";

export default function useJoke() {
  const question = ref("");
  const answer = ref("");
  const reveal = ref(false);

  /* 
  function return void
  */
  function getJoke() {
    answer.value = "";
    question.value = "";
    reveal.value = false;
    axios
      .get("https://v2.jokeapi.dev/joke/Programming")
      .then((res) => {
        question.value =
          res.data.type === "single" ? res.data.joke : res.data.setup;
        if (res.data.delivery) {
          answer.value = res.data.delivery;
          setTimeout(() => {
            reveal.value = true;
          }, 5000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return { reveal, question, answer, getJoke };
}
