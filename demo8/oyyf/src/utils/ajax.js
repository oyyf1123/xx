import axios from 'axios'

const ajax = ({
  url,
  method = 'get' || 'GET',
  headers,
  params,
  data,  //post 请求的数据参数
  withCredentials,// 跨源凭证  接口跨源的权限的证明
}) => {
  return new Promise((resolve,reject) => {
    switch (method) {
      case 'get' || 'GET':
        axios.get(url, {
          headers,
          params,
          withCredentials
        }).then(res => resolve(res))
          .catch(err => console.log(err))
        break;
      case 'post' || 'POST':
        let paramsData = new URLSearchParams();
        for (let key in data) {
          paramsData.append(key,data[key])
        };
        axios({
          url,
          data: paramsData,
          headers
        }).then(res => resolve(res))
          .catch(err => console.log(err))
        break;
      case 'put' || 'PUT':
        axios({
          url,
          data,
          headers
        }).then(res => resolve(res))
          .catch(err => console.log(err))
        break;
        case 'delete' || 'DELETE':
            axios({
              url,
              data,
              headers
            }).then(res => resolve(res))
              .catch(err => console.log(err))
            break;
      default:
        break;
    }
  } )
}

export default ajax