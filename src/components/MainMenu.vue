<template>
  <div class="menu">
    <a href="/" class="menu__link hover-effect">Acceuil</a>
    <a href="/exemple" class="menu__link hover-effect">Exemple</a>
    <a class="menu__link hover-effect" >Contact</a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainMenu",
  methods: {},
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
.menu{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;
  .menu__link{
    font-size: 25px;
    height: 100%;
    color: #f6f3e4;
    cursor: pointer;
    padding: 4px;

  }
  .hover-effect {
  --b: 0.1em;   /* the thickness of the line */
  --c: #1095c1; /* the color */
  
  color: #0000;
  padding-block: var(--b);
  background: 
    linear-gradient(var(--c) 50%,#fff 0) 0% calc(100% - var(--_p,0%))/100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
}
.hover-effect:hover {
  --_p: 100%;
  --_s: .3s;
}
}
</style>
