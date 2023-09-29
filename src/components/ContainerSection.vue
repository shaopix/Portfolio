<template>
  <section class="section-background" :style="styleObject">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "MainSection",
  props: ["backgroundColor", "height"],
  methods: {},
  setup(props) {
    const styleObject = reactive({
      "background-color": props.backgroundColor,
      height: `${props.height}px`,
    });
    return { styleObject };
  },
});
</script>
<style scoped lang="scss">
.section-background {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
