/*
 * @Descripttion:
 * @Author: Oral
 * @Date: 2022-07-29 13:55:14
 * @LastEditTime: 2022-07-29 17:02:22
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app:any = createApp(App)
app.use(store)
  .use(router)
  .mount('#app')
