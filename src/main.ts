import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@fortawesome/fontawesome-free/js/all"

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 6,
  newestOnTop: true
})

app.mount('#app')
