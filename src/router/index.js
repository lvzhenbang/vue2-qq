import Vue from 'vue'
import Router from 'vue-router'
// 注册router组件
Vue.use(Router)
// 导入组件
import message from '../components/message/message.vue'
import friends from '../components/friends/friends.vue'
import dynamic from '../components/dynamic/dynamic.vue'

let routes = [
  { path: '/message', name: 'message', component: message },
  { path: '/friends', name: 'friends', component: friends },
  { path: '/dynamic', name: 'dynamic', component: dynamic }
]

export default new Router({
  routes
})
