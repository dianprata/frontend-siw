// axios
import axios from 'axios'
import state from './store/state'

const baseURL = "https://api.sip-poltek.xyz";
// const baseURL = "http://localhost:3000";

axios.defaults.headers.common['Authorization'] = `${state.AppActiveUser.token ? state.AppActiveUser.token : ''}`;

export default axios.create({
  baseURL: baseURL
  // You can add your headers here
})
