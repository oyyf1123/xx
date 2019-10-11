const mongoose = require( 'mongoose' )

// 创建骨架模块

        // const userSchema = new mongoose.Schema( options )
        /* 
            这里的options表示一个对象，对象中存储的就是字段和字段类型
        */

const shopSchema = new mongoose.Schema({
    shop_id: String,
    shop_name: String,
    shop_address: String,
    shop_phone: String,
    shop_info: String,
    shop_slogan: String,
    shop_category: String,
    shop_feature: String,
    shop_delivery_cost: Number,
    shop_mini_deli_amount: Number,
    shop_start_time: String,
    shop_end_time: String,
    shop_logo: String,
    shop_business_license: String,
    shop_license: String
})


// 导出模块

module.exports = shopSchema