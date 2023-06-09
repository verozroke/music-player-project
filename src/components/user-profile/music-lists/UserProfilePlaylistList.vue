<template>
    <div class="playlists">
        <UserProfileTitle>Твои плейлисты:</UserProfileTitle>
        <ul class="list">
            <!-- TODO: Playlist list -->
        </ul>
    </div>
</template>

<script lang="ts" setup >
// @ts-ignore
import UserProfileTitle from '@components/user-profile/UI/UserProfileTitle.vue';

    
</script>

<style scoped lang="scss">

.playlists {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.list {
    display: flex;
}


</style>