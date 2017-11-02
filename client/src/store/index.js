import Vue from 'vue'
import Vuex from 'vuex'

import { jobGetters, activeTabGetters } from './getters'
import { boardMutations } from './mutations'

import jobs from '../../data/jobs.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jobs: jobs,
		activeBoardTab: 'jobs'
	},
	getters: Object.assign({}, jobGetters, activeTabGetters),
	mutations: Object.assign({}, boardMutations)
})