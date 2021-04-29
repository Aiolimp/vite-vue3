import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 有关antdUi组件
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

createApp(App).mount('#app')
createApp(App).use(router, store,Antd).mount('#app')
// createApp(App).use(store).mount('#app')
