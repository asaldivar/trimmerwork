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
	resettrimmerFilterSettings(state) {
		state.trimmerFilterSettings['search'] = ''
		state.trimmerFilterSettings['skillLevel'] = 'all'
		state.trimmerFilterSettings['isCertified'] = false
		state.trimmerFilterSettings['wantsAccommodations'] = false
		state.trimmerFilterSettings['hasReferences'] = false
	},
	settrimmerFilterSettings(state, key, value) {
		state.trimmerFilterSettings[key] = value
	},
	toggleFilter(state) {
		state.trimmerFilterSettings['filtersOn'] = !state.trimmerFilterSettings['filtersOn']
	}
}