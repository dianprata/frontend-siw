import axios from "./axios";

export default {
  index(params) {
    return axios.get(`/api/complaint?${params}`);
  },
  markAsResolved(id) {
    return axios.put(`/api/complaint/mark-is-resolved/${id}`);
  },
  store(payload) {
    return axios.post('/api/complaint/store', payload);
  }
}
