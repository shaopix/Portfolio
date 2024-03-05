<template>
  <div class="principal">
<MonsterSalyer></MonsterSalyer>
</div>

</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import MonsterSalyer from "@/components/MonsterSlayer.vue"

export default defineComponent({
  name: "ExempleSecond",
  components: {
    MonsterSalyer
  },
});
</script>
<style scoped lang="scss">

.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;

}


</style>
