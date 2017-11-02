import Vue from 'vue'
import Vuex from 'vuex'

import { jobGetters } from './getters'

import jobs from '../../data/jobs.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jobs: jobs
	},
	getters: Object.assign({}, jobGetters)
})