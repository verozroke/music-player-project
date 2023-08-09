<template>
    <PlayerButton :is-play-button="true" @click="playerButtonHandler()">
        <v-icon v-if="!playerStore.isPlaying" name="bi-play-fill" fill="black" scale="2"/>
        <v-icon v-else name="md-pause-round" fill="black" scale="1.5"/>
    </PlayerButton>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import PlayerButton from '../UI/PlayerButton.vue';
import { usePlayerStore } from '@stores/playerStore';

const playerStore = usePlayerStore();

const playerButtonHandler = () => {
    if(playerStore.isPlaying) {
        playerStore.audio.pause()
        playerStore.changeIsPlaying()  
        return      
    }
    playerStore.audio.play()
    playerStore.changeIsPlaying()

}


onMounted(() => {
    playerStore.isPlaying = false
})




</script>

<style lang="scss" scoped>

</style>