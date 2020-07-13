import axios from "./axios";

export default {
  index(params) {
    return axios.get(`/api/announcement?${params}`);
  },
  markNotActive(id) {
    return axios.put(`/api/announcement/mark-not-active/${id}`);
  },
  store(payload) {
    return axios.post('/api/announcement/store', payload);
  }
}
