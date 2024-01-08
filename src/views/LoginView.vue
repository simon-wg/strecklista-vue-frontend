<script setup lang="ts">
import LoginForm from '@/components/login/LoginForm.vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const router = useRouter()
const toast = useToast()

const handleLogin = (input: { username: string, password: string }) => {
  const { username, password } = input
  if (username === 'admin' && password === 'admin') {
    sessionStorage.setItem('sessionToken', username)
    router.push({path: '/', replace: true})
  }
  else {
    toast.error('Invalid username or password', {
      position: 'top-right',
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  }
}

</script>

<template>
  <div class="loginform">
    <LoginForm @login="handleLogin"/>
  </div>
</template>

<style scoped>
.loginform {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>