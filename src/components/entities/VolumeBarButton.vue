<template>
    <div class="volume">
		<transition name="volume__bar">
			<div v-if="isActive" class="volume__bar">
				<div class="volume__close-button"><img src="/img/icons/arrow-down.png" alt="arrow"></div>
				<input min="0" max="100" v-model="volumeBar" type="range" class="wb-PKR-slider" id="wb-PKR-chip-count">
			</div>
		</transition>
		<div @click="openVolumeBar" class="volume__button">
			<img src="/img/icons/speaker.png" alt="speaker">
		</div>
    </div>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref, watch } from 'vue';
import { usePlayerStore } from '../../stores/playerStore'

const isActive: Ref<boolean> = ref(false)

const openVolumeBar = () => {
	isActive.value = !isActive.value
}

const playerStore = usePlayerStore()

const volumeBar: Ref<number> = ref(0)


onMounted(() => {
	volumeBar.value = 50
	playerStore.audio.volume = 50 / 100
})

watch(volumeBar, () => {
    playerStore.setVolumeBar(volumeBar.value)
})

</script>

<style lang="scss" scoped>
.volume {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: .3em;
	position: relative;
	&__bar {
		position: absolute;
		display: flex;
		top: calc(-120px - .6em);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: .3em;
		&-enter-from {
			opacity: 0;
			transform: translateY(100px);
		}
		&-enter-active {
			transition: all .4s ease-in;
		}
		&-enter-to {
			opacity: 1;
			transform: translateY(0);
		}
		&-leave-from {
			opacity: 1;
			transform: translateY(0);
		}
		&-leave-active {
			transition: all .4s ease-out;
		}
		&-leave-to {
			opacity: 0;
			transform: translateY(100px);
		}
	}
	&__close-button {
		width: 20px;
		height: 20px;
		& img {
			width: 20px;
			height: 20px;
		}
	}
	&__button {
		cursor: pointer;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #222222;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 15px rgba(0, 0, 0, 1);
		transition: .4s;
		z-index: 5;
		& img {
			width: 25px;
			height: 25px;
			filter: invert(100);
		}
		&:hover {
			box-shadow: 0 0 0 rgba(0, 0, 0, 1);
			background-color: #fff;
			transition: .4s;
			& img {
				filter: none;
			}
		}
	}
}


.wb-PKR-slider {
	appearance: none;
	outline: none;
	background-color: rgb(130, 130, 130);
	width: 100px;
	height: 10px;
	margin: 45px 0;
	border-radius: 1.2em;
	transform: rotate(-90deg);
    -webkit-appearance:none;
    overflow: hidden;
}
.wb-PKR-slider::-webkit-slider-thumb {
    -webkit-appearance:none;
    appearance:none;
    width:0px;
    height:0px;
    background:transparent;
    box-shadow: -100vw 0 0 calc(100vw) rgb(70, 70, 70);
    cursor:pointer;
    border-radius: 50%; 
}

</style>