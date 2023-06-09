<template>
    <div class="card">
        <UserProfileClose @click="userStore.changeIsProfileOpen(false)" class="close"/>
        <UserProfileSettings class="settings"/>
        <UserProfilePicture imageURL="https://shikimori.me/system/users/x160/948792.png?1686160114" />
        <div class="title">{{ userStore.user.nickname }}</div>
        <div class="email-subtitle">{{ userStore.user.email }}</div>
        <UserProfileButton class="profile-button">
            Редактировать профиль <img src="/img/icons/pencil.svg" alt="">
        </UserProfileButton>
    </div>
</template>

<script lang="ts" setup>
import UserProfileClose from '@components/user-profile/icons/UserProfileClose.vue'
import UserProfileSettings from '@components/user-profile/icons/UserProfileSettings.vue'
import UserProfilePicture from '@components/user-profile/UI/UserProfilePicture.vue'
import UserProfileButton from '@components/user-profile/UI/UserProfileButton.vue'
import { useUserStore } from '@stores/userStore'
import { IPlaylist, ISong } from '@/interfaces'

const userStore = useUserStore()
//
    
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    font-family: 'Barlow', sans-serif;
    flex-direction: column;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    position: relative;
    height: 300px;
}

.title {
    font-weight: 700;
    margin-top: .5em;
    line-height: 1.2em;
    color: #b9b9b9;
    font-size: 24px;
}

.email-subtitle {
    font-weight: 300;
    line-height: 1.2em;
    color: #b9b9b9;
    font-size: 16px;
}

.profile-button {
    margin-top: 0.6em;
    display: flex;
    gap: .3em;
    align-items: center;
    img {
        filter: invert(70%);
        height: 13px;
        width: 13px;
    }
}


.close {
    top: 0;
    left: 0;
    position: absolute;
}


.settings {
    top: 0;
    right: 0;
    position: absolute;
}
</style>