<template>
    <PlayerButton @click="playerStore.changeIsRetry">
        <v-icon name="md-repeat-round" :fill="playerStore.isRetry ? '#18bc50' : 'white'" scale="1.5"/>
    </PlayerButton>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/playerStore';
import PlayerButton from '../UI/PlayerButton.vue';

const playerStore = usePlayerStore()

</script>

<style scoped>

</style>