<template>
    <div>
        <h1>Guess the Number</h1>
        <button v-if="!isGameRunning" @click="startGame">Start Game</button>
        <div v-if="isGameRunning">
        <p>Guess a number between 1 and 100:</p>
        <input type="text" v-model="guess" />
        <button @click="checkGuess">Check</button> 
        <div class="hintTry">
            <span>Nombre d'essais: {{nbTry}}</span>
            <p v-if="message" class="hint">{{ message }}</p>
        </div>
       
        <button v-if="isGameRunning" @click="stopGame">Stop Game</button>
    </div>
    </div>
</template>

<script>
import useGuessNumber from '@/composables/useGuessNumber';
export default {
    setup() {
        const { guess, message, checkGuess, nbTry, isGameRunning, stopGame, startGame } = useGuessNumber();
        return {
            guess,
            message,
            checkGuess,
            nbTry,
            isGameRunning,
            stopGame,
            startGame
        };
    }
};
</script>

<style scoped>
.container {
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

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
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.hint {
    color: #333;
    animation: fadeIn 0.5s ease-in-out;
    margin: 10px;
}

.hintTry {
    margin: 20px;
    height: 50px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

</style>