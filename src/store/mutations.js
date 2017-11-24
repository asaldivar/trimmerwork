import Cookies from 'js-cookie'

export const boardMutations = {
	setActiveTab(state, payload) {
		state.activeBoardTab = payload
	}
}
export const formMutations = {
	setJobFormState(state, payload) {
		state.jobForm = payload
	},
	setJobFormImage(state, payload) {
		state.jobForm['image'] = payload
	}
}
export const cookieMutations = {
	setCookie(state, payload) {
		state.hasCookie = payload
	},
	updateSavedPosts(state, payload) {
		const index = state.savedPosts.map(post => {
			return post._id
		}).indexOf(payload._id)

		if (index === -1) {
			state.savedPosts.push(payload)
		} else {
			state.savedPosts.splice(index, 1)
		}

		// Cookies.set('savedPosts', state.savedPosts)
	}
}
export const trimmerMutations = {
	setTrimmers(state, payload) {
		state.trimmers = payload
	}
}
export const resumesMutations = {
	setFilteredTrimmers(state, payload) {
		state.filteredTrimmers = payload
	},
	setFilteredResumes(state, payload) {
		state.filteredResumes = payload
	}
}
export const filterSettingsMutations = {
	resetTrimmerFilterSettings(state) {
		state.trimmerFilterSettings['search'] = ''
		state.trimmerFilterSettings['skillLevel'] = 'all'
		state.trimmerFilterSettings['isCertified'] = false
		state.trimmerFilterSettings['wantsAccommodations'] = false
		state.trimmerFilterSettings['hasReferences'] = false
	},
	settrimmerFilterSettings(state, key, value) {
		state.trimmerFilterSettings[key] = value
	},
	resetResumeFilterSettings(state) {
		state.resumeFilterSettings['search'] = '',
		state.resumeFilterSettings['jobCategory'] = ''
	},
	toggleFilter(state, settings) {
		state[settings]['filtersOn'] = !state[settings]['filtersOn']
	}
}