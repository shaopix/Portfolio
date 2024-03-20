import { ref } from 'vue';
export default function useDemonSlayer() {
    const playerHealth = ref(100);
    const playerAttack = ref(10);
    const playerHeal = ref(20);
    const demonHealth = ref(100);
    const demonAttack = ref(15);
    const demonHeal = ref(10);
    const gameIsRunning = ref(false);
    const winner = ref('');
    const turns = ref<Turn[]>([]);
    const playerWin = ref(false);
    const demonWin = ref(false);

    interface Turn {
        isPlayer: boolean;
        text: string;
    }

    function startGame() {
        playerWin.value = false;
        demonWin.value = false;
        gameIsRunning.value = true;
        playerHealth.value = 100;
        demonHealth.value = 100;
        turns.value = [];
    }

    function attack() {
        console.log('attack');
        const damage = dealDamage(playerAttack.value);
        demonHealth.value -= damage;
        turns.value.push({
            isPlayer: true,
            text: `Player hits Demon for ${damage}`
        });
        if (checkWin()) {
            return;
        }
        demonAttackTurn();
    }

    function specialAttack() {
        const damage = dealDamage(playerAttack.value * 2);
        demonHealth.value -= damage;
        turns.value.push({
            isPlayer: true,
            text: `Player hits Demon hard for ${damage}`
        });
        if (checkWin()) {
            return;
        }
        demonAttackTurn();
    }

    function heal() {
        const healValue = healPlayer(playerHeal.value);
        playerHealth.value += healValue;
        turns.value.push({
            isPlayer: true,
            text: `Player heals for ${healValue}`
        });
        demonAttackTurn();
    }

    function dealDamage(attack: number) {
        console.log('dealDamage');
        return Math.floor(Math.random() * attack);
    }

    function healPlayer(heal: number) {
        return Math.floor(Math.random() * heal);
    }

    function demonAttackTurn() {
        const damage = dealDamage(demonAttack.value);
        playerHealth.value -= damage;
        turns.value.push({
            isPlayer: false,
            text: `Demon hits Player for ${damage}`
        });
        checkWin();
    }

    function checkWin() {
        if (demonHealth.value <= 0) {
            playerWin.value = true;
            gameIsRunning.value = false;
            return true;
        } else if (playerHealth.value <= 0) {
            demonWin.value = true;
            gameIsRunning.value = false;
            return true;
        }
        return false;
    }

    function stopGame() {
        gameIsRunning.value = false;
    }

    return {
        playerHealth,
        playerAttack,
        playerHeal,
        demonHealth,
        demonAttack,
        demonHeal,
        gameIsRunning,
        winner,
        turns,
        playerWin,
        demonWin,
        startGame,
        attack,
        specialAttack,
        heal,
        stopGame
    };
}