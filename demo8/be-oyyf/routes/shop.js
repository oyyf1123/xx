const express = require('express')

const router = express.Router()

const db = require( '../db' )

const multer = require('multer')

const path = require('path')


// var imgArr = [] // 传递图片给req.body

var imgObj = {} // 传递图片给req.body

var storage = multer.diskStorage({
  destination: function (req, file, cb) { //存储的位置
    cb(null, path.join(__dirname, '../public/upload'))
  },
  filename: function (req, file, cb) { //给上传的图片取名
    var tempName = file.originalname.split('.')[1];
    var fileName = file.fieldname + '-' + Date.now() + '.' + tempName;

    //   imgArr.push( fileName )

    imgObj[file.fieldname] = fileName

    //   req.filename = imgArr
    req.filename = imgObj

    cb(null, fileName);
  }
})

var upload = multer({
  storage: storage
})


router.route('/shop')
  .post(upload.any(), async (req, res, next) => {
    // res.send('发射')
    // console.log(req.filename); //传古来的图片
    // console.log(req.body); //接收前端传过来的数据 
    var data = Object.assign({}, req.body, req.filename);
    // console.log('req.filename',req.filename);
    console.log('data',data);
    const result = await db.shop.add(data);
    
    res.render('shop', {
      data: JSON.stringify({
        info: result.info,
        status: result.status,
      })
    })
  })
  .put()
  .delete(async (req, res, next) => {
    const { _id } = req.query // 接收前端发来的_id参数
      const result = await db.shop.del( _id )
      res.render('shop',{
          data: JSON.stringify({
              info: result.info,
              status: result.status,
              data: result.data
          })
      })
  } )
  .get(async (req, res, next) => {
    const result = await db.shop.query()
    res.render('shop', {
      data: JSON.stringify({
        info: result.info,
        status: result.status,
        data:result.data,
      })
    })
  })

module.exports = router