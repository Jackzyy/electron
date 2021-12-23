import 'normalize.css'
import '@/styles/index.scss'
import elementConfig from '@/plugins/element.config'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router).mount('#app')

elementConfig(app)
