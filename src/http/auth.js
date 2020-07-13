import axios from './axios';

export default {
  login(payload) {
    return axios.post('/api/auth/signin', payload)
  },
  profile() {
    return axios.get('/api/auth/profile')
  },
  register(payload) {
    return axios.post('/api/auth/register', payload)
  }
}

