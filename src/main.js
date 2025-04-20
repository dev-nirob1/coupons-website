import BaseButton from './components/element/BaseButton.vue'
import BaseTitle from './components/element/BaseTitle.vue'
import HeroTitle from './components/element/HeroTitle.vue'
import SubTitle from './components/element/SubTitle.vue'
import InputField from './components/element/InputField.vue'
import './assets/main.css'
// import { zems_animate } from './plugins/zems_animate'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseImage from './components/element/BaseImage.vue'
import BaseParagraph from './components/element/BaseParagraph.vue'
import BaseTextArea from './components/element/BaseTextArea.vue'
import ListItem from './components/element/ListItem.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
// app.use(zems_animate)
app.use(router)
app.component('BaseButton', BaseButton)
app.component('BaseTitle', BaseTitle)
app.component('HeroTitle', HeroTitle)
app.component('SubTitle', SubTitle)
app.component('InputField', InputField)
app.component('BaseImage', BaseImage)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseTextArea', BaseTextArea)
app.component('ListItem', ListItem)
app.mount('#app')
