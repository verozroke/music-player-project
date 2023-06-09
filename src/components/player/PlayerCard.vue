<template>
    <div 
        class="player-card"
    >
        <div class="player-card__song-title">
            {{ playerStore.currentSong.title }}
        </div>
        <div class="player-card__cover" ref="$coverCard" 
            :style="{
                transform: cardTransform,
                transition: 'transform .15s ease-out'
            }">
            <img ref="$imageCard" :src="playerStore.currentSong.album_cover" alt="">
        </div>
        <Player class="player-card__player"/>
    </div>
</template>

<script lang="ts" setup>
import Player from '@components/player/Player.vue';
import { useMouseInElement } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue';
import { usePlayerStore } from '@stores/playerStore'

const playerStore = usePlayerStore()

const $coverCard = ref<HTMLElement | null>(null)
const $imageCard = ref<HTMLImageElement | null>(null)

onMounted(() => {
    if($imageCard.value != undefined) {
        $imageCard.value.onload = function() {
            $imageCard.value!.crossOrigin = "Anonymous"
            const {R, G, B} = getColor($imageCard.value as HTMLImageElement, 4)
            document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        }
    }
})

function getColor(imageElem: HTMLImageElement, ratio: number) {
    
    const canvas = document.createElement('canvas');
    let width = canvas.width = imageElem.width
    let height = canvas.height = imageElem.height

    const context = canvas.getContext('2d')
    context?.drawImage(imageElem, 0, 0)

    let data, length;
    let i = -4, count = 0
    
    data = context?.getImageData(0, 0, width, height)!
    length = data.data.length

    let R, G, B;
    R = G = B = 0;

    while((i += ratio * 4) < length) {
        ++count
        R += data.data[i];
        G += data.data[i + 1];
        B += data.data[i + 2];
    }
    R = ~~(R / count)
    G = ~~(G / count)
    B = ~~(B / count)
    console.log(R, G, B
    );
    return {
        R, G, B
    }

}


// Perspective 3D Hover Changing Effect

const { elementX, elementY, isOutside, elementHeight, elementWidth} = 
    useMouseInElement($coverCard)

const cardTransform = computed(() => {
    const MAX_ROTATION = 6   


    const rX = ( 
        MAX_ROTATION / 2 -
        (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2) // hangles x-axis

    const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
    ).toFixed(2) // hangles y-axis

    return isOutside.value
        ? ''
        : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})


</script>

<style lang="scss" scoped>

.player-card {
    display: flex;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    font-family: 'Barlow', sans-serif;
    width: 400px;
    min-height: 400px;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    justify-content: center;
    &__cover {
        aspect-ratio : 1 / 1;
        width: 100%;        
        & img {
            aspect-ratio : 1 / 1;
            width: 100%;
            object-fit: cover;
        }
    }
}

</style>
