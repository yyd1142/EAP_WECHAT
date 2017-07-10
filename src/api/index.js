import { httpGet, httpPost } from './requestService'
const domain = 'http://api.etp.com/'

export default {
  getJSON: httpGet('/xxx'),
  postJSON: httpPost('/xxx')
}
