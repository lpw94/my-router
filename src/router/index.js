import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import News from '@/components/News'
import Home from '@/components/Home'
import Hello from '@/components/Hello'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Main',component:Main, name: '关于我们',hidden:false,children:[
	    {path:'/404', name: '404', component :Page404,hidden:false},
	    {path:'/Hello', name: '欢迎', component:Hello}
    ]},
    {path:'/home', name: '首页', component :Home, hidden: true},
    {path:'/news', name: '新闻', component:News},
    { path: '*', redirect: '/Hello', hidden: true }
  ]
})