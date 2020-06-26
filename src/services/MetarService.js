import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.met.no/weatherapi/tarmetar/1.0`,
  withCredentials: false,
  headers: {
    Accept: '*',
    'Access-Control-Allow-Origin': '*'
  }
})

function extractMetar(data) {
  console.log(data)
  return data
}

export default {
  getMetar(icaoCode) {
    return apiClient
      .get('/metar.txt', { params: { icao: icaoCode } })
      .then(response => extractMetar(response.data))
      .catch(err => console.log('Error while fetching metar: ' + err))
  }
}
