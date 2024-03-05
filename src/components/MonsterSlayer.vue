<template>
  <div class="principal">
    <div class="block">
      <div>
        <h2>Monster Slayer</h2>
      </div>
      <div>
        <button v-if="!gameIsRunning" @click="startGame">Start Game</button>
        <button v-if="gameIsRunning" @click="attackMonster">
          Attack Monster
        </button>
        <button v-if="gameIsRunning" @click="specialAttackMonster">
          Special Attack Monster
        </button>
        <button v-if="gameIsRunning" @click="healPlayer">Heal Player</button>
      </div>
      <div v-if="gameIsRunning" class="pdv">
        <label for="player">
          Player
          <progress id="player" max="100" :value="playerHealth">
            {{ playerHealth }}%
          </progress>
        </label>
        <label for="monster">
          monster
          <progress id="monster" max="100" :value="monsterHealth">
            {{ monsterHealth }}%
          </progress>
        </label>
      </div>
    </div>
    <div v-if="gameIsRunning && turns.length" class="detailTurn">
      <div>
        <p v-for="(turn, id) in turns" :key="id">{{ turn.text }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useMonsterSlayer from "@/composables/useMonsterSlayer";

export default defineComponent({
  name: "MonsterSalyer",
  setup() {
    const {
      playerHealth,
      monsterHealth,
      gameIsRunning,
      turns,
      attackMonster,
      specialAttackMonster,
      healPlayer,
      startGame,
      endGame,
    } = useMonsterSlayer();
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
  },
});
</script>
<style scoped lang="scss">
.container-second {
  width: 400px;
  text-align: center;
}

.detailTurn {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 200px;
}

.block {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 50px;
  progress {
    width: 100%;
    margin-bottom: 10px;
  }
  button {
    margin: 10px;
  }
}
.principal {
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
