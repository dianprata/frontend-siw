import axios from './axios';

export default {
  store(payload) {
    return axios.post('/api/critics-suggestion/store', payload)
  },
}

