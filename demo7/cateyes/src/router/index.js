/* 
    此文件为路由的配置文件，也是router模块创建文件
*/
// 引入模块创建相关其他模块             模块 -  插件
import Vue from 'vue';

import VueRouter from 'vue-router'; //vue-router是Vue的一个插件 

import routes from './routes';



// 安装插件
Vue.use(VueRouter);

// 1. 创建模块

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;