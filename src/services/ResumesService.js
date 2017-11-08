import Api from '@/services/Api'

export default {
	fetchResumes() {
		return Api().get('resumes')
	}
}