import axios from './axios';

export default {
  login(payload) {
    return axios.post('/api/auth/signin', payload)
  },
  logout(id) {
    return axios.post('/api/auth/signout', id === 1 ? {admin_logout: true} : {resident_logout: true})
  },
  profile() {
    return axios.get('/api/auth/profile')
  },
  register(payload) {
    return axios.post('/api/auth/register', payload)
  }
}

