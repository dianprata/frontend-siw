import axios from "./axios";

export default {
  index(params) {
    return axios.get(`/api/resident?${params}`);
  },
  store(payload) {
    return axios.post('/api/resident/store', payload);
  },
  edit(id,payload) {
    return axios.put(`/api/resident/${id}`, payload);
  },
  delete(id) {
    return axios.delete(`/api/resident/${id}`);
  }
}
