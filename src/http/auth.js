import axios from './axios';

export default {
  login(username, password) {
    return axios.post('/api/auth/signin', {username, password})
  },
  register(payload) {
    return axios.post('/api/auth/register', payload)
  }
}

