<template>
    <PlayerLayout>
        <div class="player">
            <ul class="player__button-row">
                <li>
                    <PlayerRetry/>
                </li>
                <li>
                    <PlayerPrev/>
                </li>
                <li>
                    <PlayerPlay/>
                </li>
                <li>
                    <PlayerNext/>
                </li>
                <li>
                    <PlayerShuffle/>
                </li>
            </ul>
            <ul class="player__trace-row">
                <li>
                    {{ playerStore.currentTime || '00:00' }}
                </li>
                <li>
                    <!-- TODO: Traceback -->
                    <div class="line"></div>
                </li>
                <li>
                    {{  playerStore.currentSongDuration }}
                </li>
            </ul>
        </div>

    </PlayerLayout>
</template>

<script setup lang="ts">
import PlayerNext from '@components/player/player-buttons/PlayerNext.vue'
import PlayerLayout from '@components/layouts/PlayerLayout.vue'
import PlayerRetry from '@components/player/player-buttons/PlayerRetry.vue'
import PlayerPrev from '@components/player/player-buttons/PlayerPrev.vue'
import PlayerPlay from '@components/player/player-buttons/PlayerPlay.vue'
import PlayerShuffle from '@components/player/player-buttons/PlayerShuffle.vue'
import { usePlayerStore } from '@stores/playerStore'
import { onMounted } from 'vue'

const playerStore = usePlayerStore()


const formatTime = (SECONDS: number | string) => {
    return SECONDS as number > 3600
        ? new Date(SECONDS as number * 1000).toISOString().substring(11, 16)
        : new Date(SECONDS as number * 1000).toISOString().substring(14, 19);
}

onMounted(() => {    
    playerStore.setCurrentSongDuration(formatTime(playerStore.currentSongDuration))
    playerStore.audio.addEventListener('timeupdate', (e) => {        
        playerStore.setCurrentTime(formatTime(Math.floor((e.target as HTMLAudioElement).currentTime)))
    })
})



</script>

<style lang="scss" scoped>

.player {
    font-family: 'Kanit', sans-serif;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    & > ul {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
}

.line {
    height: 2px;
    background-color: #fff;
    width: 100px;
}





</style>