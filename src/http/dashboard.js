import axios from './axios'

export default {
  index() {
    return axios.get('/api/statistic');
  }
}
