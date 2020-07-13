import axios from './axios';

export default {
  index(params) {
    return axios.get(`/api/critics-suggestion?${params}`);
  },
  markAsRead(id) {
    return axios.put(`/api/critics-suggestion/mark-is-read/${id}`);
  },
  store(payload) {
    return axios.post('/api/critics-suggestion/store', payload)
  },
}

