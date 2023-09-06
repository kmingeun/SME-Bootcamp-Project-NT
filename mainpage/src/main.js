import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';

// 애플리케이션 생성
const app = createApp(App);

// axios를 Vue 인스턴스에서 사용할 수 있도록 설정
app.config.globalProperties.$axios = axios;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 라우터를 애플리케이션에 연결
app.use(router);
app.use(store);

// 애플리케이션을 마운트
app.mount('#app');
