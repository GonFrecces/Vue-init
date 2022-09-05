import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import '/src/assets/css/layout.css'
import store from './store'
import Emitter from 'tiny-emitter'

// Make BootstrapVue available throughout your project
const app = createApp(App)
app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter();

app.use(router)
app.use(store)
app.mount('#app');
/* createApp(App).use(router).mount('#app') */
