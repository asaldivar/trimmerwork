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
	resetFilterSettings() {
		state.filterSettings = {}
	},
	setFilterSettings(state, key, value) {
		state.filterSettings[key] = value
	}
}