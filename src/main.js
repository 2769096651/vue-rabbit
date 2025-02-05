import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'

//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'

import {componentPlugin} from '@/components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
//注册懒加载插件
app.use(lazyPlugin)

app.use(componentPlugin)
