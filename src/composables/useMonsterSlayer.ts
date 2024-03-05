import { ref } from "vue";

export default function useMonsterSlayer() {
    const playerHealth = ref(100);
    const monsterHealth = ref(100);
    const gameIsRunning = ref(false);
    const turns = ref<Turn[]>([]);

    interface Turn {
        isPlayer: boolean;
        text: string;
    }

    function attackMonster() {
        const damage = Math.floor(Math.random() * 10);
        monsterHealth.value -= damage;
        turns.value.unshift({
            isPlayer: true,
            text: `Player hits Monster for ${damage}`,
        });
        if (checkEndGame()) {
            return;
        }
        attackPlayer();
    }

    function attackPlayer() {
        const damage = Math.floor(Math.random() * 10);
        playerHealth.value -= damage;
        turns.value.unshift({
            isPlayer: false,
            text: `Monster hits Player for ${damage}`,
        });
        checkEndGame();
    }

    function specialAttackMonster() {
        const damage = Math.floor(Math.random() * 20);
        monsterHealth.value -= damage;
        turns.value.unshift({
            isPlayer: true,
            text: `Player hits Monster hard for ${damage}`,
        });
        if (checkEndGame()) {
            return;
        }
        attackPlayer();
    }

    function healPlayer() {
        const healValue = Math.floor(Math.random() * 20);
        if (playerHealth.value + healValue > 100) {
            playerHealth.value = 100;
        } else {
            playerHealth.value += healValue;
        }
        turns.value.unshift({
            isPlayer: true,
            text: `Player heals for ${healValue}`,
        });
        attackPlayer();
    }

    function startGame() {
        playerHealth.value = 100;
        monsterHealth.value = 100;
        gameIsRunning.value = true;
        turns.value = [];
    }

    function endGame() {
        gameIsRunning.value = false;
    }

    function checkEndGame() {
        if (playerHealth.value <= 0) {
            alert("You lost! New game?");
            endGame();
            return true;
        } else if (monsterHealth.value <= 0) {
            alert("You won! New game?");
            endGame();
            return true;
        }
        return false;
    }

    return {
        playerHealth,
        monsterHealth,
        gameIsRunning,
        turns,
        attackMonster,
        specialAttackMonster,
        healPlayer,
        startGame,
        endGame,
    };
}
