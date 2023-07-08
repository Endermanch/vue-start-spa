import { createApp } from 'vue';
import App from './App.vue';
import $bus from './utils/events'
import router from './routes';
import $pages from './data';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

// Use router plugin.
app.use(router);

// Assign global event bus to every object.
app.provide('$bus', $bus);

// Assign global pages to every object.
app.provide('$pages', $pages);

// Mount to #app element in the DOM.
app.mount('#app');