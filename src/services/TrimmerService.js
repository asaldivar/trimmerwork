import Api from '@/services/Api'

export default {
  fetchTrimmers() {
    return Api().get('trimmers')
  }
}