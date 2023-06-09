<template>
    <div class="favourites">
        <UserProfileTitle>Любимые треки:</UserProfileTitle>
        <ul class="list">
            <!-- TODO: Put favourites -->
            <!-- <li></li> --> 
        </ul>
    </div>
</template>

<script setup lang="ts">
import UserProfileTitle from '@components/user-profile/UI/UserProfileTitle.vue';

</script>

<style scoped lang="scss">

.favourites {
    display: flex;
    gap: 1em;
    flex-direction: column;
    width: 100%;
}

.list {
    display: flex;
    flex-direction: column;
    width: 100%;
}

</style>