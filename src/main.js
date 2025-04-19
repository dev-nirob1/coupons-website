import './assets/main.css'
// import { zems_animate } from './plugins/zems_animate'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
// app.use(zems_animate)
app.use(router)
app.mount('#app')
