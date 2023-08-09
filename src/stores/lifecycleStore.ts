import { defineStore } from "pinia";
import { Ref, ref } from "vue";




export const useLifecycleStore = defineStore('lifecycleStore', () => {
    const isLoading: Ref<boolean> = ref(true)


    const changeIsLoading = () => {
        isLoading.value = !isLoading.value
    }
    return {
        isLoading,
        changeIsLoading
    }
})

