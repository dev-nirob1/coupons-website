import BaseButton from '@/components/element/BaseButton.vue'
import BaseTitle from '@/components/element/BaseTitle.vue'
import HeroTitle from '@/components/element/HeroTitle.vue'
import SubTitle from '@/components/element/SubTitle.vue'
import InputField from '@/components/element/InputField.vue'
import BaseImage from '@/components/element/BaseImage.vue'
import BaseParagraph from '@/components/element/BaseParagraph.vue'
import BaseTextArea from '@/components/element/BaseTextArea.vue'
import ListItem from '@/components/element/ListItem.vue'
import BaseTable from '@/components/element/BaseTable.vue'
import TableHeader from '@/components/element/TableHeader.vue'
import TableRow from '@/components/element/TableRow.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(VueQueryPlugin)

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
