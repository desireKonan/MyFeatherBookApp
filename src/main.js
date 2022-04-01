import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
//Importer le style de bootstrap.
import "./assets/styles/app.scss";
import 'bootstrap';

const app = createApp(App);

app.use(router);

app.mount('#app');
