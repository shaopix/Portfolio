<template>
	<div class="percent">
		<div>
			<h1>Demon Slayer Game</h1>
		</div>

		<div v-if="!gameIsRunning && !playerWin && !demonWin">
			<button @click="handleStartGame" class="button">Start Game</button>
		</div>
		<div v-if="gameIsRunning" class="flex">
			<div class="player-banner flex">
				<h2>Joueur</h2>
				<progress :value="playerHealth" max="100" class="healthBar"
					:class="getHealthBarColor(playerHealth)"></progress>
			</div>
			<div class="player-buttons">
				<button @click="attack" class="button attack">Attaquer</button>
				<button @click="heal" class="button health">Heal</button>
			</div>
			<div class="demon-banner flex">
				<h2>Monstre</h2>
				<progress :value="demonHealth" max="100" class="healthBar green"></progress>
			</div>

		</div>
		<div v-if="playerWin">
			<h2>Vous avez gagné !</h2>
			<button @click="handleStartGame">Rejouer</button>
		</div>
		<div v-if="demonWin">
			<h2>Vous avez perdu !</h2>

			<button @click="handleStartGame">Rejouer</button>
		</div>

		<button v-if="gameIsRunning" @click="stopGame" class="button">Stop Game</button>

	</div>
</template>

<script>
import useDemonSlayer from "@/composables/useDemonSlayer.ts";
import { defineComponent } from "vue";
export default defineComponent({
	setup() {
		const { startGame, attack, specialAttack, demonHeal, playerHeal, demonHealth, playerHealth, heal, gameIsRunning, demonWin, playerWin, stopGame } = useDemonSlayer();

		const handleStartGame = () => {
			startGame();
		};

		const getHealthBarColor = (health) => {
			if (health >= 51) {
				return 'green';
			}
			if (health >= 34) {
				return 'orange';
			}
			return 'red';
		};

		return {
			handleStartGame,
			gameIsRunning,
			attack,
			specialAttack,
			demonHeal,
			playerHeal,
			demonHealth,
			playerHealth,
			heal,
			getHealthBarColor,
			playerWin,
			demonWin,
			stopGame
		};

	}
});
</script>

<style lang="scss">
.percent {
	text-align: center;
	width: 100%;
}

.healthBar {
	width: 100%;
	height: 50px;
}

.green::-webkit-progress-bar-value {
	color: green;
}

.orange {
	background-color: orange;
}

.red {
	background-color: red;
}

.flex {
	display: flex;
	justify-content: space-between;
}



progress[value] {
	--w: 200px;
	/* the width*/
	--color:
		/* the progress color */
		linear-gradient(#fff8, #fff0),
		repeating-linear-gradient(135deg, #0003 0 10px, #0000 0 20px),
		/* if < 30% "red" */
		linear-gradient(red 0 0) 0 /calc(var(--w)*.3 - 100%) 1px,
		/* if < 60% "orange" */
		linear-gradient(orange 0 0) 0 /calc(var(--w)*.6 - 100%) 1px,
		/* else "green" */
		green;
	--background: lightgrey;
	/* the background color */

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	width: var(--w);
	margin: 0 10px;
	border-radius: 10em;
	background: var(--background);
}

progress[value]::-webkit-progress-bar {
	border-radius: 10em;
	background: var(--background);
}

progress[value]::-webkit-progress-value {
	border-radius: 10em;
	background: var(--color);
}

progress[value]::-moz-progress-bar {
	border-radius: 10em;
	background: var(--color);
}

label {
	font-size: 20px;
	font-weight: bold;
	display: block;
	margin: 20px 0;
}

.player-banner {
	display: inline-block;
	margin-right: 20px;
}

.demon-banner {
	display: inline-block;
}

.player-buttons {
	margin-top: 20px;
}

.button {
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

.attack {
	background-image: linear-gradient(30deg, #ff1100, #d54cf7);

}

.health {
	background-image: linear-gradient(30deg, #00ff0d, #4ce3f7);
}

.button:hover {
	background-position: right center;
	background-size: 200% auto;
	-webkit-animation: pulse 2s infinite;
	animation: pulse512 1.5s infinite;
}

@keyframes pulse512 {
	0% {
		box-shadow: 0 0 0 0 #05bada66;
	}

	70% {
		box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
	}

	100% {
		box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
	}
}
</style>