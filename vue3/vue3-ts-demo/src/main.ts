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
import '@/assets/styles/reset.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app: any = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
  .use(router)
  .mount('#app')
