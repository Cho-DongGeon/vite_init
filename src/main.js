import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import mitt from 'mitt';

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

//Plugin
import confirm from './plugins/confirm';
import alert from './plugins/alert';
import loading from './plugins/loading';


const app = createApp(App);

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router).use(store).use(confirm).use(alert).use(loading).mount('#app');
app.use(PrimeVue, {
    theme: {
        options: {
            darkModeSelector: false || 'none',
        },
    },
});
