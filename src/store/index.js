import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

import { jobGetters, trimmersGetters, resumesGetters, activeTabGetters, jobForm, jobFilterSettings, trimmerFilterSettings, resumeFilterSettings, cookieGetters } from './getters'
import { boardMutations, formMutations, cookieMutations, jobMutations, resumesMutations, filterSettingsMutations, trimmerMutations } from './mutations'
import { trimmerActions } from './actions'

import jobs from '../../dist/data/jobs.json'
import trimmers from '../../dist/data/trimmers.json'
import resumes from '../../dist/data/resumes.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		jobs,
		filteredJobs: jobs,
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
		jobFilterSettings: {
			search: ''
		},
		resumeFilterSettings: {
			search: '',
			jobCategory: ''
		},
		activeBoardTab: 'jobs',
		jobForm: {
			jobCategory: 'Grow',
			jobType: 'Full-time',
			date: new Date().toISOString()
		},
		hasCookie: localStorage.getItem('trimmerWorkEmail'),
		savedPosts: JSON.parse(localStorage.getItem('savedPosts')) ? JSON.parse(localStorage.getItem('savedPosts')) : []
	},
	getters: Object.assign({}, jobGetters, trimmersGetters, resumesGetters, activeTabGetters, jobForm, jobFilterSettings, trimmerFilterSettings, resumeFilterSettings, cookieGetters),
	mutations: Object.assign({}, boardMutations, formMutations, cookieMutations, jobMutations, resumesMutations, filterSettingsMutations, trimmerMutations),
	actions: Object.assign({}, trimmerActions)
})