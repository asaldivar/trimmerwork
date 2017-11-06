export const boardMutations = {
	setActiveTab(state, payload) {
		state.activeBoardTab = payload
	}
}
export const formMutations = {
	setJobFormState(state, payload) {
		state.jobForm = payload
	}
}
export const cookieMutations = {
	setCookie(state, payload) {
		state.hasCookie = payload
	}
}
export const resumesMutations = {
	setFilteredTrimmers(state, payload) {
		state.filteredTrimmers = payload
	},
	setFilteredResumes(state, payload) {
		state.filteredTrimmers = payload
	}
}
export const filterSettingsMutations = {
	resetFilterSettings(state) {
		state.filterSettings['search'] = ''
		state.filterSettings['skillLevel'] = 'all'
		state.filterSettings['isCertified'] = false
		state.filterSettings['wantsAccommodations'] = false
		state.filterSettings['hasReferences'] = false
	},
	setFilterSettings(state, key, value) {
		state.filterSettings[key] = value
	},
	toggleFilter(state) {
		state.filterSettings['filtersOn'] = !state.filterSettings['filtersOn']
	}
}