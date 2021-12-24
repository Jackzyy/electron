import ElementPlus from '@/plugins/element-plus'

import 'normalize.css'
import '@/styles/index.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router).use(ElementPlus)
app.mount('#app')
