<template>
    <UserProfileLayout class="profile-layout">
        <UserProfileCard/>
        <UserProfileFavouriteList/>
        <UserProfilePlaylistList/>
        <UserProfileButton>
            Загрузить свой трек
        </UserProfileButton> 
    </UserProfileLayout>
</template>

<script setup lang="ts">
import UserProfileLayout from '@/components/layouts/UserProfileLayout.vue';
import UserProfileCard from '@/components/user-profile/UserProfileCard.vue';
import UserProfileFavouriteList from '@/components/user-profile/music-lists/UserProfileFavouriteList.vue';
import UserProfilePlaylistList from '@/components/user-profile/music-lists/UserProfilePlaylistList.vue';
import UserProfileButton from './UI/UserProfileButton.vue';
</script>

<style lang="scss" scoped>

.profile-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>