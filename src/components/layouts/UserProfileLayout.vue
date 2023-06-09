<template>
    <div v-if="userStore.isProfileOpen" class="profile-layout">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore()


</script>

<style lang="scss" scoped>


.profile-layout {
    padding: 15px 15px;
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
    width: 400px;
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