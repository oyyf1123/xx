const express = require('express');
const router = express.Router();

router.route('/show')
  .post((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('post');
  })
  .get((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('get');
  })

module.exports = router;