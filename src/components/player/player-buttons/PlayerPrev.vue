<template>
        <PlayerButton @click="prevSong">
            <v-icon name="md-skipprevious-round" fill="white" scale="2"/>
        </PlayerButton>

</template>

<script setup lang="ts">
import PlayerButton from '../UI/PlayerButton.vue';
import { usePlaylistStore } from '@/stores/playlistStore';

const playlistStore = usePlaylistStore()



const prevSong = () => {
    playlistStore.changeSong('prev')
    
}

</script>

<style lang="scss" scoped>

</style>