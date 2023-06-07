import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('userStore', () => {
    const isProfileOpen = ref(false);

    const changeIsProfileOpen = (value: boolean): void => {
        isProfileOpen.value = value;
    }

    return {
        isProfileOpen,
        changeIsProfileOpen
    }
}, { persist: true })