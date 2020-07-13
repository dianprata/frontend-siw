import axios from './axios'

export default {
  getCovidProvince() {
    return axios({
      method: 'get',
      url: 'https://api.kawalcorona.com/indonesia/provinsi',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
      }
    });
    // return axios.get('https://api.kawalcorona.com/indonesia/provinsi');
  }
}
