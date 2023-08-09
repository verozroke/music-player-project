<template>
    <PlayerButton @click="playerStore.changeIsShuffled">
        <v-icon name="md-shuffle-round" :fill="playerStore.isShuffled ? '#18bc50' : 'white'" scale="1.5"/>
    </PlayerButton>
</template>

<script setup lang="ts">
import PlayerButton from '../UI/PlayerButton.vue';
import { usePlayerStore } from '@/stores/playerStore';

const playerStore = usePlayerStore()


</script>

<style scoped>

</style>   