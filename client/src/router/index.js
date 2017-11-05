import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/pages/Board'
import About from '@/pages/About'
import Donate from '@/pages/Donate'
import Contact from '@/pages/Contact'
import SignUp from '@/pages/SignUp/SignUp'
import Test from '@/pages/Subscription/Test'
import JobDetail from '@/pages/JobDetail/JobDetail'
import TrimmerDetail from '@/pages/TrimmerDetail/TrimmerDetail'
import ResumeDetail from '@/pages/ResumeDetail/ResumeDetail'
import JobForm from '@/pages/JobForm/JobForm'
import TrimmerForm from '@/pages/TrimmerForm'
import ResumeForm from '@/pages/ResumeForm'
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
      path: '/trimmers/:id',
      name: 'TrimmerDetail',
      component: TrimmerDetail
    },,
    {
      path: '/resumes/:id',
      name: 'ResumeDetail',
      component: ResumeDetail
    },
    {
      path: '/job-form',
      name: 'JobForm',
      component: JobForm
    },
    {
      path: '/trimmer-form',
      name: 'TrimmerForm',
      component: TrimmerForm
    },
    {
      path: '/resume-form',
      name: 'ResumeForm',
      component: ResumeForm
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
      path: '/subscribe',
      name: 'Test',
      component: Test
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
