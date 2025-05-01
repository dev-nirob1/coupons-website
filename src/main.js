import BaseButton from '@/components/Element/BaseButton.vue'
import BaseTitle from '@/components/Element/BaseTitle.vue'
import HeroTitle from '@/components/Element/HeroTitle.vue'
import SubTitle from '@/components/Element/SubTitle.vue'
import InputField from '@/components/Element/InputField.vue'
import BaseImage from '@/components/Element/BaseImage.vue'
import BaseParagraph from '@/components/Element/BaseParagraph.vue'
import BaseTextArea from '@/components/Element/BaseTextArea.vue'
import ListItem from '@/components/Element/ListItem.vue'
import BaseTable from '@/components/Element/BaseTable.vue'
import TableHeader from '@/components/Element/TableHeader.vue'
import TableRow from '@/components/Element/TableRow.vue'
import './assets/main.css'
// import { zems_animate } from './plugins/zems_animate'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(VueQueryPlugin)
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
app.component('BaseTable', BaseTable)
app.component('TableHeader', TableHeader)
app.component('TableRow', TableRow)
app.mount('#app')
