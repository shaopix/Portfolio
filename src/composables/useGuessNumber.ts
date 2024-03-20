import { ref } from 'vue';

export default function useGuessNumber() {

    const isGameRunning = ref(false);
    const randomNumber = ref(0);
    const guess = ref('');
    const message = ref('');
    const nbTry = ref(0);


function checkGuess() {
    const userGuess = parseInt(guess.value);
    if (isNaN(userGuess)) {
        message.value = 'Veuillez entrer un nombre valide.';
    } else if (userGuess < 1 || userGuess > 100) {
        message.value = 'Veuillez entrer un nombre entre 1 et 100.';
    } else if (userGuess === randomNumber.value) {
        nbTry.value++;
        message.value = 'Congratulations! You guessed the correct number.';
    } else if (userGuess < randomNumber.value) {
        nbTry.value++;
        message.value = 'Le chiffre est plus grand que ' + userGuess + '.';
        setTimeout(() => {
            message.value = '';
        }, 5000);
    } else {
        nbTry.value++;
        message.value = 'Le chiffre est plus petit que ' + userGuess + '.';
        setTimeout(() => {
            message.value = '';
        }, 5000);
    }
}
function startGame() {
    randomNumber.value = Math.floor(Math.random() * 100) + 1;
    guess.value = '';
    message.value = '';
    nbTry.value = 0;
    isGameRunning.value = true;
}
function stopGame() {
    randomNumber.value = 0;
    guess.value = '';
    message.value = '';
    nbTry.value = 0;
    isGameRunning.value = false;
}

return {
    guess,
    message,
    nbTry,
    randomNumber,
    isGameRunning,
    checkGuess,
    startGame,
    stopGame
};
}
