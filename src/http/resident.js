import axios from "./axios";

export default {
  index(params) {
    return axios.get(`/api/head-family?${params}`);
  },
  show(id) {
    return axios.get(`/api/head-family/${id}`);
  },
  store(payload) {
    return axios.post('/api/head-family/store', payload);
  },
  edit(payload) {
    return axios.put('/api/head-family/update', payload);
  }
}
