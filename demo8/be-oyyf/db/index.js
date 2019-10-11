/* 
    index开头就表明了这个文件、文件夹的作用
    好处： index可以省略
*/

const mongoose = require('mongoose')
const connect = require('./connect')



// 模块的创建   对象 、 函数  、 字符 ...


// mongoose使用流程如下

// 1. 链接数据库
connect.init()

// 2. 创建骨架 Schmea    定义字段  
const {
    userSchema,
    shopSchema
} = require('./schema')

// 3. 创建模型 Model

// const userModel = mongoose.model( 集合名称【复数】,对应的骨架 )
const userModel = mongoose.model('yyfs', userSchema) // 很多人将集合名字没有写成复数

const shopModel = mongoose.model('shops', shopSchema)


const db = {
    user: {
        add(data) {

            return new Promise((resolve, reject) => {
                // 如何完成这个判断 ，通过数据库查询来完成

                userModel.find({}, (error, docs) => {
                    // console.log( docs )// 数组，数组中放着我们所有的存储的数据
                    // indexOf   some

                    // 如果用户已经存在，我们是不添加的，但是我们得将这个信息告诉前端

                    // 如果用户名不存在，我们就直接添加，添加的结果也要告诉前端
                    const user = new userModel(data)
                    if (docs.length != 0) {
                        //条件成立，证明数据库中是由数据的

                        const f = docs.some(item => item.username === data.username)
                        if (f) {
                            //条件成立,证明用户名重复了
                            resolve({
                                info: '用户名已经重复',
                                status: 0
                            })
                        } else {
                            // 条件不成立，证明用户名是没有的，直接存储
                            user.save(error => {
                                if (error) {
                                    resolve({
                                        info: error,
                                        status: 1
                                    })
                                } else {
                                    resolve({
                                        info: '用户注册成功',
                                        status: 2
                                    })
                                }
                            })
                        }

                    } else {
                        //条件不成立，证明数据库中 users集合石空的
                        user.save(error => {
                            if (error) {
                                resolve({
                                    info: error,
                                    status: 1
                                })
                            } else {
                                resolve({
                                    info: '用户注册成功',
                                    status: 2
                                })
                            }
                        })
                    }
                })
            })


        },
        del() {},
        modify( data ) {
            return new Promise(( resolve,reject ) => {
                userModel.find({},( error,docs ) => {
                    if ( docs.length != 0 ) {
                        //集合有数据
                        docs.map( item => {
                            if ( item.username === data.username ) {
                                userModel.findById( item._id, ( error, doc ) => {
                                    doc.password = data.newPassword
                                    doc.save( error => {
                                        if ( error ) {
                                            resolve({
                                                info: '修改失败了',
                                                status: 0
                                            })
                                        } else {
                                            resolve({
                                                info: '密码修改成功',
                                                status: 1
                                            })
                                        }
                                    })
                                })
                                return
                            }
                        })
                    } 
                })
            })
        },
        query( data ) {
            return new Promise(( resolve,reject ) => {
                userModel.find({},( error,docs ) => {
                    if ( docs.length != 0 ) {
                        // user集合不是空的，有数据的

                        const f = docs.some( item => item.username === data.username && item.password === data.password )
                        if ( f ) {
                            //条件成立
                            resolve({
                                info: '登陆成功',
                                status: 1
                            })
                        } else {
                            const flag = docs.some( item => item.username === data.username )

                            if ( flag ) {
                                resolve({
                                    info: '用户名或是密码错误',
                                    status: 3
                                })

                            } else {
                                // 证明数据库中没有这个用户名
                                resolve({
                                    info: '账号没有注册',
                                    status: 2
                                })
                            }
                        }

                    } else {
                        // user集合是空的，提示用户去注册
                        resolve({
                            info: '你是第一个用户，您还没有注册，请先注册',
                            status: 0
                        })
                    }
                })
            })
        }
    },
    shop: {
        add ( data ) {
            return new Promise(function ( resolve,reject ) {
                // 商铺是否有重复注册 
                // 1. 查询数据库，将数据库中已有的店铺查询出来
                // 2. 然后在出现出来的店铺数据中查找是否有 前端当前注册的店铺信息   通过shop_id来判断

                shopModel.find({},( err,doc ) => {
                    var flag = doc.some( item => item.shop_id == data.shop_id )
                    // console.log('flag',flag);
                    if ( !flag ) {
                        //不成立，店铺没有注册过
                        var shop = new shopModel(data)
                        shop.save((err) => {
                            if (err) {
                                resolve({
                                    info: '注册店铺失败',
                                    status:1,
                                })
                            } else {
                                resolve({
                                    info: '你成功加入了我们！',
                                    status:0,
                                })
                            }
                        })
                    } else {
                        //成立，店铺已经注册过了
                        resolve({
                            info: '这个店铺已经加入了我们哦！',
                            status:2
                        })
                    }

                })

            })
        },
        del () {

        },
        modify () {

        },
        query () {

        }
    }
}

module.exports = db