var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/word/:myword', function(req, res, next) {
  console.log(`the word is ${req.params.myword}`);
  res.render('index', { title: `Word=${req.params.myword}` });
});


module.exports = router;
