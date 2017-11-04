import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/pages/Board'
import JobDetail from '@/pages/JobDetail/JobDetail'
import JobForm from '@/pages/JobForm/JobForm'
import JobPostPreview from '@/pages/JobPostPreview/JobPostPreview'
import JobPostSubmit from '@/pages/JobPostSubmit/JobPostSubmit'

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
    },
    {
      path: '/job-form',
      name: 'JobForm',
      component: JobForm
    },
    {
      path: '/job-post-preview',
      name: 'JobPostPreview',
      component: JobPostPreview
    },
    {
      path: '/job-post-submit',
      name: 'JobPostSubmit',
      component: JobPostSubmit
    }
  ]
})
