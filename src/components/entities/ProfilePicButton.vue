<template>
    <div class="profile-button"
	:class="[{'squeeze': isMouseDown}]" 
	@mousedown="isMouseDown = true" 
	@mouseup="isMouseDown = false">

        <!-- FIXME: Here should be profile pic -->
        <img src="https://verozroke.github.io/askatti-bugatti/img/pfps/1.png" alt="pfp">
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const isMouseDown: Ref<boolean> = ref(false);


</script>

<style lang="scss" scoped>

.profile-button {
	cursor: pointer;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	background-color: #222222;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 15px rgba(0, 0, 0, 1);
	transition: .4s;
	z-index: 5;
	&.squeeze {
        transform: scale(0.95);
    }
	& img {
		width: 100%;
		object-fit: cover;
		height: 100%;
		border-radius: 50%;
	}
	&:hover {
		box-shadow: 0 0 0 rgba(0, 0, 0, 1);
		transition: .4s;
	}

}

</style>