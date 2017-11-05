import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/pages/Board'
import About from '@/pages/About'
import Donate from '@/pages/Donate'
import Contact from '@/pages/Contact'
import SignUp from '@/pages/SignUp/SignUp'
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
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
