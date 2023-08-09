import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { IPlaylist, ISong, IUser } from './../interfaces';

export const useUserStore = defineStore('userStore', () => {
    const isProfileOpen = ref(false);

    // ? make reactive 
    const user: Ref<IUser> = ref({
        nickname: 'verozroke',
        email: 'verozroke@gmail.com',
        favourite_songs: [] as ISong[],
        playlists: [] as IPlaylist[]
    })

    const changeIsProfileOpen = (value: boolean): void => {
        isProfileOpen.value = value;
    }

    const setUser = (newUser: IUser): void => {
        user.value = newUser
    }

    return {
        user,
        setUser,
        isProfileOpen,
        changeIsProfileOpen
    }
}, { persist: true })