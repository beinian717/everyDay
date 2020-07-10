import { Guid } from './guid'
import axios from 'axios'
//获取设备id
let DeviceID = localStorage.DeviceID;
if (!DeviceID) {
  DeviceID = Guid.NewGuid().ToString('D');
  localStorage.DeviceID = DeviceID;
}
let ID = DeviceID;
console.log(ID)

axios.defaults.baseURL = 'http://120.53.31.103:84';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // console.log(config)
  config.headers = {
    DeviceType: "H5",
    DeviceID: ID
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
export default axios