const mongoose = require( 'mongoose' )

// 创建骨架模块

        // const userSchema = new mongoose.Schema( options )
        /* 
            这里的options表示一个对象，对象中存储的就是字段和字段类型
        */

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})


// 导出模块

module.exports = userSchema