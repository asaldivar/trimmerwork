import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

import { jobGetters, activeTabGetters, jobForm } from './getters'
import { boardMutations, formMutations, cookieMutations } from './mutations'

import jobs from '../../data/jobs.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jobs: jobs,
		activeBoardTab: 'jobs',
		jobForm: {
			job_category: 'Grow',
			job_type: 'Full-time',
			date: new Date().toISOString()
		},
		hasCookie: Cookies.get('trimmerWorkEmail')
	},
	getters: Object.assign({}, jobGetters, activeTabGetters, jobForm),
	mutations: Object.assign({}, boardMutations, formMutations, cookieMutations)
})