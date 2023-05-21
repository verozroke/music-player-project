<template>
    <ul class="player__trace-row flex items-center gap-2 text-base">
        <li class="time">
            {{ playerStore.currentTime || '00:00' }}
        </li>
        <li class="flex items-center range">
            <input type="range" v-model="rangeLevel" min="0" :max="212" @mousedown="mouseDownHandler" @mouseup="mouseUpHandler" id="">
        </li>
        <li class="time">
            {{  playerStore.currentSongDuration }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import {usePlayerStore} from '@stores/playerStore'
import { onMounted, ref, watch } from 'vue';

const playerStore = usePlayerStore()

const rangeLevel = ref(0)
const isMouseDown = ref(false)


const mouseDownHandler = () => {
    console.log('mousedown')
    playerStore.audio.pause()
    isMouseDown.value = true
}

const mouseUpHandler = () => {
    console.log('mouseup')
    playerStore.audio.play()
    isMouseDown.value = false
    playerStore.isPlaying = true

}


watch(rangeLevel, () => {
    if(isMouseDown.value) {
        playerStore.audio.currentTime =  rangeLevel.value
        playerStore.setCurrentTime(formatTimeToString(playerStore.audio.currentTime))
    }
})



const formatTimeToString = (SECONDS: number | string): string => {
    if(typeof SECONDS === 'string') {
        return SECONDS
    }

    return SECONDS as number > 3600
        ? new Date(SECONDS as number * 1000).toISOString().substring(11, 16)
        : new Date(SECONDS as number * 1000).toISOString().substring(14, 19);
}

onMounted(() => {
    playerStore.setCurrentTime('')
    // rangeLevel.value = Math.floor(playerStore.currentTime)    
    if(playerStore.currentSongDuration !== undefined) {
        playerStore.setCurrentSongDuration(formatTimeToString(playerStore.currentSongDuration))        
    }
    playerStore.audio.addEventListener('timeupdate', (e) => {    
        if(!isMouseDown.value) {
            rangeLevel.value = Math.floor((e.target as HTMLAudioElement).currentTime)
            playerStore.setCurrentTime(formatTimeToString(Math.floor((e.target as HTMLAudioElement).currentTime)))
        }
    })
})


</script>

<style scoped lang="scss">

input[type=range]{
    z-index: 1;
    border-radius: 1em;
    -webkit-appearance: none;
}

.range:hover input[type="range"]::-webkit-slider-thumb {
    z-index: 2000;
    background: #18bc50 !important;
    box-shadow: -200px 0 0 200px #18bc50 !important;
}


input[type=range]::-webkit-slider-thumb {   
    -webkit-appearance: none; 
}
input[type=range]:focus {
    outline: none;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
        overflow: hidden;
        width: 200px;
        -webkit-appearance: none;
        background-color: #5b5b5b;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
        height: 5px;
        -webkit-appearance: none;
        z-index: 1;
        color: #13bba4;
        margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
        width: 5px;
        -webkit-appearance: none;
        height: 5px;
        border-radius: 50%;
        cursor: pointer;
        background: #fff;
        box-shadow: -200px 0 0 200px #fff;
    }
}


.time {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
}

</style>