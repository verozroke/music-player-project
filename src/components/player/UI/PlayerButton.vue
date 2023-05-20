<template>
    <div 
        ref="button" 
        class="player-button" 
        :class="[{'play': isPlayButton, 'squeeze': isMouseDown}]" 
        @mousedown="isMouseDown = true" 
        @mouseup="isMouseDown = false">
        <slot/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const isMouseDown = ref(false);


const props = defineProps({
    isPlayButton: Boolean,
})


</script>

<style lang="scss" scoped>

.player-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.play {
        background-color: #fff;
        width: 50px;
        height: 50px;
    }
    &.squeeze {
        transform: scale(0.97);
    }
}
</style>