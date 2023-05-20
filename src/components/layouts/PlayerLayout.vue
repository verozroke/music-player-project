<template>
    <div class="player-layout">
        <img :src="playerStore.currentSong.album_cover" class="backdrop-image" alt="">
        <div class="player-layout-card">
            <slot />    
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@stores/playerStore'

const playerStore = usePlayerStore()

</script>

<style lang="scss" scoped>


.player-layout {
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    user-select: none;
    flex-direction: column;
}

.backdrop-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    border-radius: 1.2em;
}


.player-layout-card {
    border-radius: 1.2em;
    // box-shadow: 20px 20px 50px Orgba(0, 0, 0, 0.5);
    // background: #fff;
    // background: linear-gradient(to right bottom, rgba(255, 255, 255, .5), rgba(255, 255, 255, 0.2));
    // background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    // backdrop-filter: blur(5px);

// /* From https://css.glass */
//     background: rgba(255, 255, 255, 0.52);
//     border-radius: 16px;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//     backdrop-filter: blur(11.1px);
//     -webkit-backdrop-filter: blur(11.1px);



    // FOR DARK

    background: rgba(0, 0, 0, 0.68);
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.6px);
    -webkit-backdrop-filter: blur(14.6px);
    z-index: 5;
}


</style>