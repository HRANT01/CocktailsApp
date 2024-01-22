import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router';
import VueLazyload from 'vue-lazyload';

createApp(App).use(store).use(router).use(VueLazyload).mount('#app')
