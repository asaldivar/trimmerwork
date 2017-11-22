export const cookieGetters = {
	getCookie: state => {
		return state.hasCookie
	},
	savedPosts: state => {
		return state.savedPosts
	},
	savedById: (state, getters) => id => {
		return getters.savedPosts.filter(post => post._id === id)[0]
	}
}
export const jobGetters = {
	allJobs: state => {
		return state.jobs
	},
	jobById: (state, getters) => id => {
		return getters.allJobs.filter(job => job._id === id)[0]
	}
}
export const trimmersGetters = {
	allTrimmers: state => {
		return state.trimmers
	},
	trimmerById: (state, getters) => id => {
		return getters.allTrimmers.filter(trimmer => trimmer._id === id)[0]
	},
	filteredTrimmers: state => {
		return state.filteredTrimmers
	}
}
export const resumesGetters = {
	allResumes: state => {
		return state.resumes
	},
	resumeById: (state, getters) => id => {
		return getters.allResumes.filter(resume => resume._id === id)[0]
	},
	filteredResumes: state => {
		return state.filteredResumes
	}
}
export const activeTabGetters = {
	getActiveBoardTab: state => {
		return state.activeBoardTab
	}
}
export const jobForm = {
	jobFormApplication: state => {
		return state.jobForm
	}
}
export const trimmerFilterSettings = {
	allSettings: state => {
		return state.trimmerFilterSettings
	}
}
export const resumeFilterSettings = {
	allResumeSettings: state => {
		return state.resumeFilterSettings
	}
}