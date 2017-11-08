import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://hybridsativaindica.herokuapp.com/api'
  })
}