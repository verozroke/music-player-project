import { defineStore } from "pinia"
import { Ref, ref } from "vue"
import { IPlaylist, ISong, IUser } from './../interfaces';
import { usePlayerStore } from './playerStore';


const playerStore = usePlayerStore()


export const usePlaylistStore = defineStore('playlistStore', () => {

    const currentPlaylist: Ref<IPlaylist> = ref({
        name: 'Крутой плейлист',
        type: 'default',
        author: {
            nickname: 'verozroke',
            email: 'verozroke@gmail.com',
            favourite_songs: [] as ISong[],
            playlists: [] as IPlaylist[]
        } as IUser,
        created_at: Date.now(),
        playlist_cover: '/img/rhcp.jpg',
        songs: [
            { title: 'ПОШЛАЯ МОЛЛИ - Папину Машину', audio_path: '/audio/paponu-mashinu.mp3', duration: 212, album_cover: '/img/papinu-mashinu.jpg' },
            { title: 'Red Hot Chilli Peppers - Black Summer', audio_path: '/audio/rhcp - black summer.mp3', duration: 232, album_cover: '/img/rhcp.jpg' },
        ]
    })


    const changeSong = (type: string) => {
        let audio: HTMLAudioElement;
        if (type === 'next') {
            playerStore.setCurrentSong(currentPlaylist.value.songs[1])
            audio = new Audio(currentPlaylist.value.songs[1].audio_path)

        } else {
            playerStore.setCurrentSong(currentPlaylist.value.songs[0])
            audio = new Audio(currentPlaylist.value.songs[0].audio_path)
        }
        playerStore.audio.pause()
        playerStore.changeIsPlaying()
        playerStore.setAudio(audio)
        playerStore.audio.volume = playerStore.volumeBar / 100
        playerStore.setCurrentTime('')

        playerStore.audio.play()
        playerStore.isPlaying = true

    }


    const setCurrentPlaylist = (value: IPlaylist) => {
        currentPlaylist.value = value
    }
    return {
        currentPlaylist,
        setCurrentPlaylist,

        changeSong,
    }
}, {
    persist: true,
})

