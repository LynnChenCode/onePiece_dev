import { createApp } from 'vue'
import routers from '@/routers'
import { createPinia } from 'pinia'
import '@/utils/mouseclick1'
import '@/utils/flexible'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
const pinia = createPinia()
const app=createApp(App)
// 全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(pinia).use(routers).mount('#app')

