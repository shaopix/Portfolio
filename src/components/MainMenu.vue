<template>
    <div>
        <div v-for="(menuItem, index) in menuItemList" v-bind:key="index">
            <span>
                {{ menuItem.label }}
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue'
import MenuItem from "../types/MenuItem"

export default defineComponent({
    name:"MainMenu",
    props:{
        menuItemList: {
            type: Array as PropType<MenuItem[]>
        }
    }
})
</script>
<style scoped>
</style>