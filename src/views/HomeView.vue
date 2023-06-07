<template>
    <transition name="profile-layout">
        <div @click="userStore.changeIsProfileOpen(false)" v-if="userStore.isProfileOpen" class="profile-layout">
            <img src="https://verozroke.github.io/askatti-bugatti/img/pfps/1.png" alt="pfp">
        </div>
    </transition>
    <div class="wrapper" >
        <div class="container">
            <ProfilePicButton @click="userStore.changeIsProfileOpen(true)" id="profile"/> 
            <VolumeBarButton id="volume"/>
            <ThemeButton id="theme"/>
            <!-- <button @click="download">DOWNLOAD</button> -->
            <PlayerCard/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import ThemeButton from '@components/entities/ThemeButton.vue'
import VolumeBarButton from '@components/entities/VolumeBarButton.vue'
import ProfilePicButton from '@components/entities/ProfilePicButton.vue'
import { usePlayerStore } from '../stores/playerStore'
import PlayerCard from '@components/PlayerCard.vue'
import axios from 'axios';
import {useUserStore} from '@stores/userStore'


const userStore = useUserStore()







const playerStore = usePlayerStore()
const audio: HTMLAudioElement = new Audio(playerStore.currentSong.audio_path)
playerStore.setAudio(audio)





watch(() => playerStore.volumeBar, () => {    
    audio.volume = playerStore.volumeBar / 100
})

// Downloading songs same things

const download = async () => {
    const { data } = await axios.get('https://sun2.dataix-kz-akkol.userapi.com/impg/iig7aIh697BZw1VwHcjw_rvEqH9TrFWPd5Yl2A/SrL2e6CE8pw.jpg?size=2400x1350&quality=95&sign=059690a51228f43c94df2f193fb7b88c&type=album', {
        responseType: 'blob'
    })
    const blob = new Blob([data], {type: 'image/jpg'})
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'shit.jpg'
    link.click()
    URL.revokeObjectURL(link.href)
}



</script>

<style lang="scss">


body {
    overflow: hidden;
}

#theme {
    position: absolute;
    bottom: 0;
    left: 0;
}

#profile {
    position: absolute;
    top: 0;
    right: 0;
}

#volume {
    position: absolute;
    right: 0;
    bottom: 0;
}

.wrapper {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
}


.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;    
}



.profile-layout {
    img {
		width: 100%;
		object-fit: cover;
		height: 100%;
		border-radius: 50%;
	}
    overflow: hidden;
    position: absolute;
    right: 0;
    z-index: 6;
    width: 550px;
    height: 100vh;
    background-color: #242424;
    &-enter-from {
        transform: translateX(100vw);
    }
    &-enter-active {
        transition: .3s;
    }
    &-leave-from {
        transform: translateX(0);
    }
    &-leave-active {
        transition: .3s;
    }
    &-leave-to {
        transform: translateX(100vw);
    }
}   



</style>