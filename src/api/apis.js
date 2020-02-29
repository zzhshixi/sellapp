//封装请求
import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:3000'
let req = axios.create({
  baseURL:'http://192.168.1.103:3000',//基本路径
  timeout: 10000, //增加超时限制
  
})
// 获取商家
export function getSeller(){
  return req.get('/api/seller')
}
// 获取评价
export function getRatings(){
  return req.get('/api/ratings')
}
// 获取商品
export function getGoods(id){
  return req.get('/api/goods',{
    params:{
      id
    }
  })
}
