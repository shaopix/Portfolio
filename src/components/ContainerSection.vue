<template>
  <section class="section-background" :style="styleObject">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "MainSection",
  props:{
    backgroundColor:{
      type: String,
      default: "#ffffff"
    },
    height:{
      type: Number,
      default: 403
    },
    justifyContent:{
      type: String,
      default:"flex-start"
    }
    
  },
  methods: {},
  setup(props) {
    const styleObject = reactive({
      "background-color": props.backgroundColor,
      height: `${props.height}px`,
      "justify-content": props.justifyContent,
    });
    return { styleObject };
  },
});
</script>
<style scoped lang="scss">
.section-background {
  display: flex;
  width: 100%;
}
</style>
