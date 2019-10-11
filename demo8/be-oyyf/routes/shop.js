const express = require('express')

const router = express.Router()

const multer = require('multer')

const path = require('path')

router.route('/shop')
  .post((res,req,next) => {
    res.send('发射')
  })
  .put()
  .delete()
  .get()

module.exports = router