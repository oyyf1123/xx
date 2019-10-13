/* 
    将接口统一管理，为了将来更好的维护和更新
*/

const BACK_END_URL = 'http://localhost:3000'


/* 
    后端接口文档中

        店铺添加地址   /shop
*/


const API = {
    // 店铺添加的接口
    shop: `${BACK_END_URL}/shop`
}


export default API