<template>
    <div class="pic-container">
        <img :src="imageURL" alt="" class="profile-pic">
    </div>
</template>

<script setup lang="ts">
const props =  defineProps({
    imageURL: String
}) 


</script>

<style lang="scss" scoped>

.pic-container {
    border-radius: 50%;
    background-color: #353535;
    height: 172px;
    width: 172px;
    object-fit: cover;
    & .profile-pic {
        border-radius: 50%;
        height: 172px;
        width: 172px;
    }
}

</style>