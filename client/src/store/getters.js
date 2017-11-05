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
	}
}
export const resumesGetters = {
	allResumes: state => {
		return state.jobs
	},
	resumeById: (state, getters) => id => {
		return getters.allResumes.filter(resume => resume._id === id)[0]
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