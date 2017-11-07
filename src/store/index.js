import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

import { jobGetters, trimmersGetters, resumesGetters, activeTabGetters, jobForm, trimmerFilterSettings, resumeFilterSettings } from './getters'
import { boardMutations, formMutations, cookieMutations, resumesMutations, filterSettingsMutations } from './mutations'

import jobs from '../../data/jobs.json'
import trimmers from '../../data/trimmers.json'
import resumes from '../../data/resumes.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jobs,
		trimmers,
		filteredTrimmers: trimmers,
		resumes,
		filteredResumes: resumes,
		trimmerFilterSettings: {
			filtersOn: false,
			search: '',
			skillLevel: 'all',
			isCertified: false,
			wantsAccommodations: false,
			hasReferences: false
		},
		resumeFilterSettings: {
			search: '',
			jobCategory: ''
		},
		activeBoardTab: 'jobs',
		jobForm: {
			job_category: 'Grow',
			job_type: 'Full-time',
			date: new Date().toISOString()
		},
		hasCookie: Cookies.get('trimmerWorkEmail')
	},
	getters: Object.assign({}, jobGetters, trimmersGetters, resumesGetters, activeTabGetters, jobForm, trimmerFilterSettings, resumeFilterSettings),
	mutations: Object.assign({}, boardMutations, formMutations, cookieMutations, resumesMutations, filterSettingsMutations)
})