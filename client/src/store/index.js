import Vue from 'vue'
import Vuex from 'vuex'

import { jobGetters, activeTabGetters, jobForm } from './getters'
import { boardMutations, formMutations } from './mutations'

import jobs from '../../data/jobs.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jobs: jobs,
		activeBoardTab: 'jobs',
		jobForm: {
			jobCategory: 'Grow',
			date: new Date().toISOString()
		}
	},
	getters: Object.assign({}, jobGetters, activeTabGetters, jobForm),
	mutations: Object.assign({}, boardMutations, formMutations)
})