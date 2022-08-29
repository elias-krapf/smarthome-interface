import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
const app = createApp(App);

import mitt from "mitt";
const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router).mount('#app')