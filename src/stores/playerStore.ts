// Logic About Player Store
// timeOfSong
// Playlist (mb playlist Store)
// isRetry



import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import { Song } from '@/interfaces'



const mockas: Song[] = [
    { title: 'ПОШЛАЯ МОЛЛИ - Папину Машину', audio_path: '/audio/paponu-mashinu.mp3', duration: 212, album_cover: '/img/papinu-mashinu.jpg' },
    { title: 'Red Hot Chilli Peppers - Black Summer', audio_path: '/audio/rhcp - black summer.mp3', duration: 0, album_cover: '/img/rhcp.jpg' },
    { title: '', audio_path: '/audio/', duration: 0, album_cover: '' },
    { title: '', audio_path: '/audio/', duration: 0, album_cover: '' },
    { title: '', audio_path: '/audio/', duration: 0, album_cover: '' },
]




export const usePlayerStore = defineStore('playerStore', () => {
    // Exact HTMLAudioElement of audio
    const audio: Ref<HTMLAudioElement> = ref({} as HTMLAudioElement)


    // ? Current Song Info
    const currentSong: Ref<Song> = ref({ title: 'ПОШЛАЯ МОЛЛИ - Папину Машину', audio_path: '/audio/paponu-mashinu.mp3', duration: 212, album_cover: '/img/papinu-mashinu.jpg' } as Song)
    const currentTime: Ref<string> = ref('')
    const currentSongDuration: Ref<number | string> = ref(currentSong.value.duration)

    // ? Song status
    const isPlaying: Ref<boolean> = ref(false)
    const volumeBar: Ref<number> = ref(0)


    // ! Boolean changers
    const changeIsPlaying = () => {
        isPlaying.value = !isPlaying.value
    }

    // ! Setters
    const setAudio = (audiopass: HTMLAudioElement) => {
        audio.value = audiopass
    }

    const setCurrentSong = (value: Song) => {
        currentSong.value = value
        currentSongDuration.value = value.duration
    }
    const setCurrentTime = (value: string) => {
        currentTime.value = value
    }
    const setCurrentSongDuration = (value: number | string) => {
        currentSongDuration.value = value
    }

    const setVolumeBar = (value: number) => {
        volumeBar.value = value
    }

    return {
        audio,
        setAudio,

        currentSong,
        setCurrentSong,

        currentTime,
        setCurrentTime,

        currentSongDuration,
        setCurrentSongDuration,

        isPlaying,
        changeIsPlaying,

        volumeBar,
        setVolumeBar,
    }
}, {
    persist: true,
})

