// axios
import axios from 'axios'
import state from './store/state'

const baseURL = process.env.VUE_APP_API_BASEURL;

axios.defaults.headers.common['Authorization'] = `${state.AppActiveUser.token ? state.AppActiveUser.token : ''}`;

export default axios.create({
  baseURL: baseURL
  // You can add your headers here
})
