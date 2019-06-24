import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import single from '@/components/single'
import tableHeader from '@/components/tableHeader'
import upload from '../../src/components/div'
import app from '../dd/app'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/single',
      name: 'single',
      component: single
    },
    {
      path: '/tableHeader',
      name: 'tableHeader',
      component: tableHeader
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/app',
      name: 'app',
      component: app
    }
  ]
})
