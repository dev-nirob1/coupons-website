import './assets/main.css'
import { zems_animate } from './plugins/zems_animate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(zems_animate)
app.use(router)
app.mount('#app')
