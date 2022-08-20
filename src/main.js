import Vue from 'vue'
import App from './App.vue'
// 导入全局注册组件的index文件
import myComponents from './components/index'
// 由于index里已经有了install方法，所以可以直接注册到Vue上
Vue.use(myComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
