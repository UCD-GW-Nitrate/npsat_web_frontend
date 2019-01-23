import axios from 'axios'

// via https://itnext.io/anyway-heres-how-to-do-ajax-api-calls-with-vue-js-e71e57d5cf12

export default {
  getCounties () {
    return axios.get('/counties/').then(response => {
      // can do logic here then return promise
      return response.data.results
    })
  }
}
