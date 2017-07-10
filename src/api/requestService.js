import Axios from 'axios'
var Conf = {
  domain: 'http://api.com/'
}

const Http = (path, method, domain, bHandleError) => {
  return (data, params) => {
    return Axios({
      method: method,
      url: (domain || Conf.domain) + '' + path,
      data: method === 'post' ? data : null,
      params: method === 'get' ? data : params,
      timeout: 10000,
      // headers: { 'MKOTEAM-ACCESS-TOKEN': window.localStorage.getItem('qy_token') }
    }).then(function (response) {
      if (response.data.code == 0) {
        return response.data
      } else {
        if (response.data.code == 5) {
          // window.localStorage.removeItem('qy_token');
          // Toast('用户会话状态已过期，请重新登录!');
          // let timer = setTimeout(() => {
          //   clearTimeout(timer);
          //   window.mkoVue.$MKOJump('/login');
          // }, 1500);
          return response.data;
        }
        if (bHandleError == true) {
          return response.data;
        } else {
          alert(`请求数据错误[code:${response.data.code}],${response.data.msg}`)
          return null;
        }
      }
    }).catch(function (error) {
      let errorString = error.toString();
      if (error.code == "ECONNABORTED") {
        alert(`请求数据超时，请检查网络连接是否正常!`);
      } else if (errorString.match('^Error: Network Error')) {
        alert(`网络异常，请检查网络连接是否正常!`)
      } else {
        alert(`网络异常[${errorString}]，请检查网络是否正常!`)
      }
      return null;
    })
  }
}

export function httpGet(path, domain, bHandleError) {
  return Http(path, 'get', domain, bHandleError)
}

export function httpPost(path, domain, bHandleError) {
  return Http(path, 'post', domain, bHandleError)
}
