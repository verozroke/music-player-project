<script setup lang="ts">
import { useLifecycleStore } from '@stores/lifecycleStore'
const lifecycleStore = useLifecycleStore()

</script>

<template>
  <div v-if="lifecycleStore.isLoading">Loading</div>
  <RouterView/>
</template>

<style lang="scss">
@import '@styles/fontStyles.scss';
@import '@styles/clearStyles.scss';
</style>
