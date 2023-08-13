<template>
  <AuthLayout>
    <!-- Добро пожаловать в Audix! -->
    <div class="box">
      <div class="box__title" @click="userStore.getUserByHash()">Логин</div>
      <div class="box__subtitle">С возвращением! Хочешь хорошенько послушать музыку? Тогда заходи сюда поскорее.</div>
      <form class="box__form">
        <div class="input-box">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email">
        </div>
        <div class="input-box">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password">
        </div>
        <button @click="(e) => userStore.loginUser(e, { email, password })">Войти</button>
      </form>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from './UI/AuthLayout.vue';
import { ref } from 'vue'
import { useUserStore } from '@stores/userStore'

const email = ref('')
const password = ref('')

const userStore = useUserStore()



</script>

<style lang="scss" scoped>
.box {
  color: #fff;
}


input {
  color: #000;
}
</style>