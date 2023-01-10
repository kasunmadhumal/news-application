import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/main.css'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');
