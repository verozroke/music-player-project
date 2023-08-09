<template>
    <PlayerButton @click="nextSong">
        <v-icon name="md-skipnext-round" fill="white" scale="2"/>
    </PlayerButton>
</template>

<script setup lang="ts">
import PlayerButton from '../UI/PlayerButton.vue';
import { usePlaylistStore } from '@/stores/playlistStore';

const playlistStore = usePlaylistStore()

const nextSong = () => {
    playlistStore.changeSong('next')
    // console.log('audio: ', playerStore.audio)
    // console.log('current Song: ', playerStore.currentSong)
    // console.log('current Playlist: ',  playlistStore.currentPlaylist)
}

</script>

<style scoped>

</style>