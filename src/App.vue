<template>
 <div class="app">
  <MainMenu :menu-item-list="menuItems"></MainMenu>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainMenu from './components/MainMenu.vue';
import MenuItem from './types/MenuItem';

const menuItems: Array<MenuItem> = [{label: 'foo', componentName: 'foo'}, {label: 'bar', componentName: 'bar'}];

export default defineComponent({
  name: 'App',
  components:{
    MainMenu
  },
  setup() {
  return{
    menuItems
  }
}
});
</script>

<style>

</style>
