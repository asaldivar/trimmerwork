import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/pages/Board'
import JobDetail from '@/pages/JobDetail/JobDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    {
    	path: '/jobs/:id',
    	name: 'JobDetail',
    	component: JobDetail
    }
  ]
})
