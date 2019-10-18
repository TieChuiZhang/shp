import Vue from 'vue'
import App from './App'
import'./assets/styles/iconfont.css'
import'./assets/styles/aa.scss'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
