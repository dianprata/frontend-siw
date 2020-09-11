import axios from "./axios";

export default {
  index(params) {
    return axios.get(`/api/complaint?${params}`);
  },
  markIsPending(id) {
    return axios.put(`/api/complaint/mark-is-pending/${id}`);
  },
  markIsRead(id) {
    return axios.put(`/api/complaint/mark-is-read/${id}`);
  },
  markIsAcc(id) {
    return axios.put(`/api/complaint/mark-is-acc/${id}`);
  },
  store(payload) {
    return axios.post('/api/complaint/store', payload);
  }
}
