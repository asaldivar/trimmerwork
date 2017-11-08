import TrimmerService from '@/services/TrimmerService'

export const trimmerActions = {
	async getTrimmers({ commit }) {
		const trimmers = await TrimmerService.fetchTrimmers()
		commit('setTrimmers', trimmers.data)
		commit('setFilteredTrimmers', trimmers.data)
	}
}