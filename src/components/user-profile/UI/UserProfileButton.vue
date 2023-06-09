<template>
    <div class="button">
        <slot/>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped lang="scss">

.button {
    text-align: center;
    font-family: 'Barlow', sans-serif;
    letter-spacing: 1px;
    width: max-content;
    padding: 10px 20px;
    color: #b9b9b9;
    font-weight: 700;
    border-radius: .2em;
    background-color: #333333;
    border: 2px solid #333333;
    transition: .2s;
    &:hover {
        transition: .2s;
        border: 2px solid #18bc50;
    }
}

</style>