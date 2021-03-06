import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 500,
});

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

import Mixins from '@/mixins'


createApp(App).use(store).use(router).mixin(Mixins).mount('#app')