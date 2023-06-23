require('./bootstrap');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

import Loding from './components/Loding.vue';

const app = createApp(App);
app.component('Loding',Loding)
app.use(router).use(store).mount('#app');

