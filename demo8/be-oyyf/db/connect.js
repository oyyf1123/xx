/* 
    表示数据库的链接
*/

const mongoose = require( 'mongoose' )
const DBNAME = 'oyyf'

// mongoose.connect( 数据库地址，错误优先的回调函数)
// 数据库地址构成;   mongodb://127.0.0.1:27017/数据库名称
// 错误优先的回调函数表示的事回调函数第一个参数是error

const connect = {
    init () {
        mongoose.connect(`mongodb://127.0.0.1:27017/${ DBNAME }`, error => {
            if ( error ) {
                console.log( error )
            } else {
                console.log( `The db is connect success~~` )
            }
        })
    }
}


module.exports = connect
