import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/reset.css'

createApp(App).use(router).mount('#app')
