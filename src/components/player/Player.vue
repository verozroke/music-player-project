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
            <PlayerTraceback/>
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
import PlayerTraceback from './PlayerTraceback.vue'



</script>

<style lang="scss" scoped>

.player {
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    & > ul:not(:last-child) {
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